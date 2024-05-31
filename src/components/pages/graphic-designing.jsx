import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const GraphicDesigning = () => {
  return (
    <>
      <Helmet title="Graphic Designing">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/graphic-design.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Introduction to graphic designing</h3>
                  <p>
                    Graphic designing is creating visual content that
                    communicates messages and ideas to an audience. It involves
                    the use of typography, images, colors, and other design
                    elements to convey information in a visually appealing way.
                    In digital marketing, graphic designing is crucial in
                    creating eye-catching and engaging visuals for websites,
                    social media platforms, email marketing, and other digital
                    channels. Effective graphic design can enhance brand
                    recognition, increase website traffic, and drive
                    conversions. It is an essential aspect of a successful
                    digital marketing strategy.
                    <br />
                    <br />
                    Furthermore, effective graphic design can significantly
                    impact a business’s success in the digital age, where
                    attention spans are short and competition is high. It can
                    help businesses to stand out from the crowd and capture the
                    attention of their target audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToAction />

        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <h3>
                    What makes us the best graphic designing services agency?{" "}
                  </h3>
                  <p>
                    To help increase your conversions, We at Digi Marketing
                    bring well-planned, skillfully designed content with the
                    right amount of creativity.
                    <br />
                    <br />
                    Our graphic designers create visual concepts that inspire
                    and captivate consumers, thus highlighting your product/
                    services to build brand awareness, which is an integral part
                    of online marketing. We cover all types of designs,
                    including logo design, business cards, label design,
                    letterhead, billboards, flyers, brochures, character design,
                    etc. Our team has a strong design background that helps
                    incline more followers to follow you on social media. Also,
                    we stand out from the competition because of our commitment
                    to delivering exceptional quality work, personalized
                    service, and innovative solutions.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/graphic-design-2.png")',
                }}
                data-aos="fade-left"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default GraphicDesigning;
