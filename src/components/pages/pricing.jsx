import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../layout/helmet";
import axios from "axios";
import { useEffect, useState } from "react";

const Pricing = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const { data } = await axios.get(
<<<<<<< HEAD
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/pricing/fetch-pricing"
=======
        "http://localhost:4001/api/pricing/fetch-pricing"
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      setPricing(data);
    } catch (error) {
      console.error("Error fetching Blog:", error);
    }
  };
  return (
    <>
      <Helmet title="Pricing">
        <div id="pricing" className="pricing my-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Pricing</span>
              <h2>Pricing</h2>
              <p>
                Unlock Your Potential: Explore Our Tailored Pricing Packages for
                Every Business Need.
              </p>
            </div>

            <div className="row no-gutters my-2">
              {pricing.map((item, index) => (
                <div
                  className={item.cls}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  key={index}
                >
                  <h3>{item.title}</h3>
                  <h4>
                    ${item.price}
                    <span>per month</span>
                  </h4>
                  <ul>
                    {item.features
                      .split(/\s*,\s*/)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="bx bx-check"></i> {feature}
                        </li>
                      ))}
                  </ul>
                  <Link className="get-started-btn" to="/contact">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default Pricing;
