import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const DigitalMarketing = () => {
  return (
    <>
      <Helmet title="Digital Marketing">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/digital-marketing.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Introduction to digital marketing</h3>
                  <p>
                    Digital marketing uses channels like search engines, social
                    media, email, and websites to promote products, services, or
                    brands. It is a form of marketing done online and through
                    digital technologies. Digital marketing is rapidly becoming
                    the preferred way for businesses to reach their target
                    audience as more people spend their time online.
                    <br />
                    <br />
                    Digital marketing is important for businesses because it
                    allows them to reach a larger audience than traditional
                    marketing methods. With digital marketing, companies can
                    target specific demographics, such as age, gender, location,
                    and interests, resulting in a higher return on investment
                    (ROI). Additionally, digital marketing can be tracked and
                    measured. Also, it provides businesses with valuable data to
                    help them make informed decisions about their marketing
                    strategy.
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
                  <h3>What makes us the best digital marketing agency?</h3>
                  <p>
                    As a digital marketing agency, we consider ourselves the
                    best because of our commitment to delivering exceptional
                    client results. We have a team of experienced and skilled
                    professionals who stay up-to-date with the latest trends and
                    techniques in the industry, ensuring that our clients always
                    receive the most effective digital marketing solutions.
                    <br />
                    <br />
                    We also understand that every business is unique, so we
                    create tailored digital marketing strategies specific to
                    each client’s needs and goals. Furthermore, we take the time
                    to understand our client’s business objectives, target
                    audience, and industry to develop comprehensive and
                    customized plans to help them succeed.
                    <br />
                    <br />
                    Looking to grow and succeed in today’s digital landscape
                    gives us a chance because we stand out from the competition
                    in several ways:
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/digital-marketing-2.png")',
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

export default DigitalMarketing;
