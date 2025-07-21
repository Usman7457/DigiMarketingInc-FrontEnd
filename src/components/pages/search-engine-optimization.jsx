import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const SearchEngineOptimization = () => {
  return (
    <>
      <Helmet title="Search Engine Optimization">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage: 'url("assets/service-images/seo.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Introduction to SEO</h3>
                  <p>
                    Search engine optimization (SEO) refers to the process of
                    improving the visibility and ranking of a website in search
                    engine results pages (SERPs). In simpler terms, SEO is all
                    about making sure that your website appears at the top of
                    search engine results when people search for relevant
                    keywords or phrases.
                    <br />
                    <br />
                    SEO is important for businesses because it can have a
                    significant impact on website traffic, lead generation, and
                    revenue. By optimizing your website for search engines, you
                    can increase your online visibility, attract more targeted
                    traffic to your site, and generate more qualified leads and
                    sales.
                    <br />
                    <br />
                    EO is important because it helps businesses improve their
                    online visibility and attract more targeted traffic to their
                    websites.
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
                    What makes us the best search engine optimization agency?
                  </h3>
                  <p>
                    SEO is a cost-effective way to get organic searches through
                    various optimization techniques. Through our extensive
                    keyword research, we make sure your website appears on the
                    top of the search. It is an indispensable part of any
                    marketing plan to market products or services and bring in
                    qualified leads and sales.
                    <br />
                    <br />
                    We offer search engine optimization facilities such as
                    organic search, On-page SEO and Off-page SEO, Link Building,
                    Keyword Research, Technical SEO, eCommerce SEO, franchise
                    SEO and content writing.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: 'url("assets/service-images/seo-2.jpg")',
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

export default SearchEngineOptimization;
