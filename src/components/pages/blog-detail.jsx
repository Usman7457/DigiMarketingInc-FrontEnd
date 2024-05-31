import React from "react";
import { useParams } from "react-router-dom";
import box from "../../dataset";

const BlogDetail = () => {
  const { slug } = useParams();
  return (
    <>
      {box
        .filter((item) => item.slug === slug)
        .map((item) => (
          <div id="about" className="about my-5" key={item.id}>
            <div className="container">
              <div className="row">
                <div
                  style={{
                    backgroundImage:
                      "url(/assets/img/" + item.imageUrl + ".jpg)",
                  }}
                  data-aos="fade-right"
                  className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
                ></div>
                <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                  <div
                    className="content d-flex flex-column justify-content-center aos-init aos-animate"
                    data-aos="fade-left"
                  >
                    <h3>{item.heading}</h3>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default BlogDetail;
