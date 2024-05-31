import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PortfolioDetail = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetchPortfolio();
  });
  const fetchPortfolio = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/portfolio/fetch-portfolio"
      );
      setPortfolio(data);
    } catch (error) {
      console.error("Error fetching Portfolio:", error);
    }
  };
  const { slug } = useParams();
  return (
    <>
      {portfolio
        .filter((item) => item.slug === slug)
        .map((item) => (
          <div id="about" className="about my-5" key={item.id}>
            <div className="container">
              <div className="row">
                <div
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  data-aos="fade-right"
                  className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
                ></div>
                <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                  <div
                    className="content d-flex flex-column justify-content-center aos-init aos-animate"
                    data-aos="fade-left"
                  >
                    <h3>{item.name}</h3>
                    <p>{item.type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PortfolioDetail;
