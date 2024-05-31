import React from "react";
import Helmet from "../layout/helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet title="Privacy Policy">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Privacy Policy</span>
              <h2>Privacy Policy</h2>
              <p>
                Protecting Your Privacy: Read Our Privacy Policy to Learn How We
                Safeguard Your Information.
              </p>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12 col-md-6 d-flex align-items-stretch">
                <p className="card-text">
                  Your privacy is important to us. This Privacy Policy outlines
                  how we collect, use, disclose, and safeguard your information
                  when you visit our website.
                  <br />
                  <br />
                  <b>Information Collection:</b> We may collect personal
                  information such as your name, email address, and contact
                  details when you interact with our site, such as when you fill
                  out forms or subscribe to our newsletter.
                  <br />
                  <br />
                  <b>Disclosure of Information:</b> We do not sell, trade, or
                  otherwise transfer your personal information to outside
                  parties without your consent, except as required by law or as
                  necessary to provide our services.
                  <br />
                  <br />
                  <b>Use of Information:</b> We use the information we collect
                  to provide, maintain, and improve our services, to communicate
                  with you, and to personalize your experience on our website.
                  <br />
                  <br />
                  <b>Changes to This Policy:</b> We may update this Privacy
                  Policy from time to time. We will notify you of any changes by
                  posting the new policy on this page. You are advised to review
                  this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default PrivacyPolicy;
