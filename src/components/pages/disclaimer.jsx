import React from "react";
import Helmet from "../layout/helmet";

const Disclaimer = () => {
  return (
    <>
      <Helmet title="Disclaimer">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Disclaimer</span>
              <h2>Disclaimer</h2>
              <p>
                Important Notice: Please Review Our Disclaimer for Information
                Regarding Liability and Terms of Use.
              </p>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12 col-md-6 d-flex align-items-stretch">
                <p className="card-text">
                  Please note that the information provided on this website is
                  for general informational purposes only. While we strive to
                  keep the content accurate and up-to-date, we make no
                  warranties or guarantees of any kind, express or implied,
                  about the completeness, accuracy, reliability, suitability, or
                  availability with respect to the website or the information,
                  products, services, or related graphics contained on the
                  website for any purpose. Any reliance you place on such
                  information is therefore strictly at your own risk. We will
                  not be liable for any loss or damage, including without
                  limitation, indirect or consequential loss or damage, or any
                  loss or damage whatsoever arising from loss of data or profits
                  arising out of, or in connection with, the use of this
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default Disclaimer;
