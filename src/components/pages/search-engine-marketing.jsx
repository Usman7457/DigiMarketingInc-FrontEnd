import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const SearchEngineMarketing = () => {
  return (
    <>
      <Helmet title="Search Engine Marketing">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/seo-marketing.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Introduction to search engine marketing (SEM)</h3>
                  <p>
                    It’s the practice of marketing a business using paid
                    advertisements that appears on search engine results pages
                    (SERPs). So naturally, every business wants to appear on top
                    and score high rank in SERPs.
                    <br />
                    <br />
                    In short, Search Engine Marketing (SEM) is a form of digital
                    marketing that involves promoting a business or website
                    through paid advertising on search engine results pages
                    (SERPs). In SEM, businesses bid on specific keywords or
                    phrases that users might search for on search engines like
                    Google or Bing. When someone searches for those keywords,
                    the search engine displays ads from businesses that have bid
                    on them. The ads appear at the top or bottom of the search
                    results page, and businesses are only charged when someone
                    clicks on their ad (hence the term “pay-per-click” or PPC
                    advertising).
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
                    What makes us the best search engine marketing agency?
                  </h3>
                  <p>
                    Our team explains the significance of search engines in SEM
                    and how beneficial it is for a business to speed up their
                    customer’s buying process. In addition, our experts use a
                    pay-per-click (PPC) advertising strategy to increase the
                    visibility of your website in SERPs. Our experts bid on
                    keywords to optimize your ad performance and bring more
                    traffic and conversions to your landing pages. Our experts
                    make sure to achieve great results by using search
                    advertising tactics and analyzing analytics so that they can
                    increase profitability with low ad spend.
                    <br />
                    <br />
                    Further we are a recognized digital marketing agency that
                    strives to be the best in the industry when it comes to
                    search engine marketing (SEM) services. Here are some of the
                    factors that set us apart and make us the best.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/seo-marketing-2.png")',
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

export default SearchEngineMarketing;
