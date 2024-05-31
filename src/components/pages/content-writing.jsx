import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const ContentWriting = () => {
  return (
    <>
      <Helmet title="Content Writing">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/content-writing.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Content Writing</h3>
                  <p>
                    Writing services include creating content for websites,
                    social media, blogs, and other digital platforms. Content is
                    a crucial aspect of any digital marketing strategy, as it
                    helps businesses to engage with their audience, establish
                    authority, and drive traffic to their website.
                    <br />
                    <br />
                    Compelling content writing services can help businesses to
                    communicate their message clearly and efficiently, establish
                    trust and credibility with their audience, and ultimately
                    drive conversions and sales. Content can take many forms,
                    including blog posts, social media updates, product
                    descriptions, etc.
                    <br />
                    <br />
                    By providing high-quality and relevant content, businesses
                    can attract and retain customers, increase brand awareness,
                    and ultimately achieve their marketing goals. In today’s
                    digital landscape, content writing services are essential
                    for any business looking to compete and succeed online.
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
                  <h3>How can we help you in growing your business?</h3>
                  <p>
                    A well-aligned team of content writers can help increase
                    your brand identity and can make words sell. Content writing
                    is brainstorming and writing content that meets SEO
                    guidelines.
                    <br />
                    <br />
                    At Digi Marketing, developing a content strategy and plan is
                    the foundation for successful content marketing. We work
                    closely with our clients to understand their business goals,
                    target audience, and brand voice to create a content plan
                    that aligns with their overall marketing strategy.
                    <br />
                    <br />
                    An essential aspect of content writing is keyword research
                    and optimization. We use tools and techniques to identify
                    relevant keywords that align with the client’s business and
                    target audience. We then optimize the content to improve
                    search engine rankings and drive organic traffic to their
                    website.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/content-writing-2.png")',
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

export default ContentWriting;
