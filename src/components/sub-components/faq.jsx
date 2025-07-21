import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Faqs = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    fetchFaq();
  }, []);
  const fetchFaq = async () => {
    try {
      const { data } = await axios.get(
        "https://digi-marketing-inc-back-end.vercel.app/api/faq/fetch-faq"
      );
      setFaq(data);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };
  return (
    <>
      <div id="faq" className="faq">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-down"
          >
            <span>F.A.Q</span>
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </div>

          <div className="faq-list">
            <ul>
              {faq.map((item, index) => (
                <li
                  data-aos="fade-up"
                  className="aos-init aos-animate"
                  key={index}
                >
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    href="/"
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target={"#" + item.target}
                  >
                    {item.question}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id={item.target}
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
