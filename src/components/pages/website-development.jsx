import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const WebsiteDevelopment = () => {
  return (
    <>
      <Helmet title="Website Development">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/website-development.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Website Design & Development</h3>
                  <p>
                    Website development is the process of creating and building
                    websites that are designed to meet the needs and goals of
                    businesses and individuals. It involves a range of
                    activities, including designing the website’s layout,
                    creating content, developing the site’s functionality, and
                    optimizing the site for search engines.
                    <br />
                    <br />
                    Web development typically involves the use of different
                    programming languages, such as HTML, CSS, JavaScript, and
                    PHP, and the use of frameworks and content management
                    systems (CMS) like WordPress and Drupal. These tools allow
                    web developers to create websites that are dynamic,
                    interactive, and easy to manage.
                    <br />
                    <br />
                    Website development plays a crucial role in establishing and
                    strengthening an online presence for businesses and
                    individuals, and it is essential for success in today’s
                    digital landscape.
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
                    What makes us the best web development services agency?
                  </h3>
                  <p>
                    Our approach to web development is quite distinctive. We
                    first understand the client’s business needs, scope and
                    objective. Then, once understood, we provide technical
                    consultation that aligns with your business. We aim to forge
                    an extremely efficient, versatile prototype. A custom
                    website would allow you to avoid unnecessary functionalities
                    and bloatware that might reduce its load time. No theme
                    restricts you from personalizing your website. Our seasoned
                    web developers produce ground-breaking results to help
                    expand your brand’s online reach. We are considered a
                    high-quality web development agency that you can experience.
                    We have got
                    <br />
                    <br />
                    Technical expertise: A reputable web development agency
                    which has a team of skilled developers who are experts in
                    various web development languages and platforms, including
                    HTML, CSS, JavaScript, PHP, and more. We are able to create
                    custom solutions to meet the client’s unique requirements
                    and have experience working with various CMS platforms.
                    <br />
                    <br />
                    Experience and portfolio: We have a proven track record of
                    successful projects and satisfied clients. Check our
                    portfolio to see the websites we have created, their design
                    style, and their range of industries.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/website-development-2.png")',
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

export default WebsiteDevelopment;
