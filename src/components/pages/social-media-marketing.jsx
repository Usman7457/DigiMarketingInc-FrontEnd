import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const SocialMediaMarketing = () => {
  return (
    <>
      <Helmet title="Social Media Marketing">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/social-media-marketing.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Social Media Marketing Basics:</h3>
                  <p>
                    Understanding social media management is essential for every
                    online business. It is the use of social media platforms
                    like Facebook, Instagram, Snapchat, Twitter or any other
                    platform on which users interact, search for content and
                    share information. Since it plays a great role in awareness
                    of different products/ services and brands, it is important
                    for brands to post content that would satisfy consumers and
                    use the right strategies to stand out in a particular
                    market- instead of creating random promotions.
                    <br />
                    <br />
                    Social Media Marketing (SMM) is about planning, designing
                    and publishing content on different social media platforms.
                    It involves staying active on platforms and understanding
                    your audience to create relevant content.
                    <br />
                    <br />
                    Social media marketing can also drive website traffic and
                    generate leads. By including links to their website in their
                    social media posts, businesses can encourage users to visit
                    their site and potentially convert into customers.
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
                  <h3>What makes us the best social media marketing agency?</h3>
                  <p>
                    Engage and connect with your audience on premium social
                    networks. Build your brand awareness, maintain your social
                    presence and engage with your audience through Social Media
                    Marketing (SMM)
                    <br />
                    <br />
                    We provide social media marketing services for small
                    businesses, enterprises and multi-location companies. Our
                    experts help establish marketing objectives, identify your
                    target audience, create engaging and shareable content, and
                    create effective campaigns to grow leads. Hiring our social
                    media team would help you grow your business and increase
                    brand awareness. Even if it’s a startup, our team will help
                    you build a custom ads campaign to win definite conversions
                    at prudently managed cost. We provide quality service that
                    aligns with your values and have expertise that you need to
                    achieve success in social media marketing.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/social-media-marketing-2.png")',
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

export default SocialMediaMarketing;
