import React from "react";
import Helmet from "../layout/helmet";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet title="Terms & Conditions">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Terms & Conditions</span>
              <h2>Terms & Conditions</h2>
              <p>
                Understanding Your Rights: Review Our Terms and Conditions for
                Clarity on Usage and Responsibilities.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12 col-md-6 d-flex align-items-stretch">
                <p className="card-text">
                  Welcome to [Digi Marketing Inc]. By accessing and using our
                  website and services, you agree to comply with and be bound by
                  the following Terms and Conditions. Please read them
                  carefully.
                  <br />
                  <br />
                  <b>Acceptance of Terms:</b> By accessing our website and using
                  our services, you agree to these Terms and Conditions. If you
                  do not agree with any part of these terms, you must not use
                  our website or services.
                  <br />
                  <br />
                  <b>Changes to Terms:</b> We reserve the right to modify or
                  replace these Terms and Conditions at any time. Any changes
                  will be posted on this page, and your continued use of the
                  website after any changes constitute your acceptance of the
                  new terms.
                  <br />
                  <br />
                  <b>Use of Website:</b> You agree to use our website and
                  services only for lawful purposes and in accordance with these
                  Terms and Conditions. You are prohibited from using our site
                  in any way that could damage, disable, or impair the site or
                  interfere with any other party's use of the site.
                  <br />
                  <br />
                  <b>Indemnification:</b> You agree to indemnify and hold [Digi
                  Marketing Inc], its affiliates, and its employees harmless
                  from any claims, liabilities, damages, losses, or expenses
                  arising out of your use of our website or services, or your
                  violation of these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default TermsAndConditions;
