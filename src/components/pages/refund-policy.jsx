import React from "react";
import Helmet from "../layout/helmet";

const RefundPolicy = () => {
  return (
    <>
      <Helmet title="Refund Policy">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Refund Policy</span>
              <h2>Refund Policy</h2>
              <p>
                Your Satisfaction Guaranteed: Explore Our Refund Policy for
                Peace of Mind on Your Purchases.
              </p>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12 col-md-6 d-flex align-items-stretch">
                <p className="card-text">
                  We strive to ensure your satisfaction with our products and
                  services. Please review our Refund Policy below:
                  <br />
                  <br />
                  <b>Eligibility for Refunds:</b> To be eligible for a refund,
                  you must contact us within [30] days of your purchase. The
                  product or service must be unused and in the same condition
                  that you received it. For digital products, a refund request
                  must be made within [30] days of purchase.
                  <br />
                  <br />
                  <b>Non-Refundable Items:</b> Certain items are non-refundable,
                  including but not limited to:
                  <br />
                  <br /> - Downloadable software products <br />
                  - Custom services once they have been initiated <br />
                  - Gift cards
                  <br />
                  <br />
                  <b>Process for Refunds:</b> To initiate a refund, please
                  contact our customer service team at
                  [info@digimarketinginc.com] with your order details. Once your
                  request is received and inspected, we will notify you of the
                  approval or rejection of your refund.
                  <br />
                  <br />
                  <b>Approved Refunds:</b> If your refund is approved, a credit
                  will automatically be applied to your original method of
                  payment within [30] days. Please note that processing times
                  may vary depending on your payment provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default RefundPolicy;
