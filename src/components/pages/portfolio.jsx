import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [portfolio, setPortfolio] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  const handleFilter = (filterType) => {
    if (filterType === "all") {
      setFilteredArray(portfolio);
    } else {
      setFilteredArray(portfolio.filter((ele) => ele.type === filterType));
      setFilter(filterType);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/portfolio/fetch-portfolio"
      );
      setPortfolio(data);
      setFilteredArray(data);
    } catch (error) {
      console.error("Error fetching Portfolio:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>DMI - Portfolio</title>
      </Helmet>
      <div id="portfolio" className="portfolio section-bg my-5">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-down"
          >
            <span>Portfolio</span>
            <h2>Portfolio</h2>
            <p>
              Elevating Brands: Crafting Digital Success Stories Through
              Strategic Marketing Solutions.
            </p>
          </div>

          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  onClick={() => handleFilter("all")}
                  className={filter === "all" ? "filter-active" : ""}
                >
                  All Projects
                </li>
                <li
                  onClick={() => handleFilter("app")}
                  className={filter === "app" ? "filter-active" : ""}
                >
                  Applications
                </li>
                <li
                  onClick={() => handleFilter("logo")}
                  className={filter === "logo" ? "filter-active" : ""}
                >
                  Logos
                </li>
                <li
                  onClick={() => handleFilter("web")}
                  className={filter === "web" ? "filter-active" : ""}
                >
                  Websites
                </li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {filteredArray.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item filter-${item.type}`}
              >
                <div className="portfolio-wrap">
                  <img
                    src={item.imageUrl}
                    className="img-fluid"
                    alt={item.name}
                  />
                  <div className="portfolio-info">
                    <h4>{item.name}</h4>
                    <p>{item.type}</p>
                  </div>
                  <div className="portfolio-links">
                    <Link
                      to={`/portfolio-detail/${item.slug}`}
                      title="More Details"
                    >
                      <i className="bx bx-link"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
