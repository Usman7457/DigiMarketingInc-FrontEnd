import React from "react";
import Testimonials from "../sub-components/testimonials";
import Faqs from "../sub-components/faq";
import Clients from "../sub-components/clients";
import Services from "../pages/services";
import Portfolio from "../pages/portfolio";
import Blogs from "../pages/blog";
import { Helmet } from "react-helmet";
import Banner from "../layout/banner";

const Home = () => {
  return (
    <>
      <Banner />
      <div id="about" className="about my-5">
        <div className="container">
          <div className="row">
            <div
              style={{ backgroundImage: 'url("assets/img/about.jpg")' }}
              data-aos="fade-right"
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
            ></div>
            <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
              <div
                className="content d-flex flex-column justify-content-center aos-init aos-animate"
                data-aos="fade-left"
              >
                <h3>
                  Why choose Digital Marketing as your digital marketing agency?
                </h3>
                <p>
                  We are a pre-eminent digital marketing agency providing you
                  with the best services to meet all your digital business
                  presence needs. Plus, we provide management and consulting
                  options for various online marketing strategies such as SEO,
                  SMM, SEM & more. Furthermore, we help brands enhance their
                  value by delivering feature rich mobile apps and robust web
                  development services. However, we are a customer centric
                  company that aims to generate remarkable results through your
                  digital assets.
                </p>
                <div className="row">
                  <div
                    className="col-md-6 icon-box aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <i className="bx bx-box"></i>
                    <h4>Digital Marketing Services</h4>
                    <p>
                      With the use innovative techniques and data-driven
                      strategies, you can now elevate your online presence,
                      drive traffic to website, and generate more leads and
                      sales.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <i className="bx bx-cube-alt"></i>
                    <h4>Custom Software Development</h4>
                    <p>
                      Custom Software Development is where we help businesses
                      elevate their value through Custom Software Development,
                      Andriod & iOS Applications, and 3D Modeling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Clients />

      <div id="about" className="about my-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
              <div
                className="content d-flex flex-column justify-content-center aos-init aos-animate"
                data-aos="fade-left"
              >
                <h3>Your Partner For Digital Marketing</h3>
                <p>
                  We thrive to deliver profitable results and targeted
                  strategies to help your business grow many folds. Also, our
                  main focus is our clients, and business partners. With years
                  of experience and working with businesses of all sizes and
                  accommodating them according to their needs and goals. You can
                  count on our exceptional skill and experience to deliver web
                  marketing campaigns that generate great revenues and fulfill
                  long term strategic goals.
                </p>
                <div className="row">
                  <div
                    className="col-md-12 icon-box aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Content & Graphics Designing</h4>
                    <p>
                      Content and Graphic is the king, we use a data-driven
                      approach to design graphics that resonate with your
                      audience and convey your message effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: 'url("assets/img/side-image.png")' }}
              data-aos="fade-right"
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
            ></div>
          </div>
        </div>
      </div>

      <Services />
      <Testimonials />
      <Portfolio />
      <Faqs />
      <Blogs />
      <Helmet>
        <title>Digi Marketing Inc</title>
      </Helmet>
    </>
  );
};

export default Home;
