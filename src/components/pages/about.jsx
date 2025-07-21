import React from "react";
import Clients from "../sub-components/clients";
import Helmet from "../layout/helmet";

const About = () => {
  const box = [
    {
      id: 1,
      imageUrl: "assets/img/features-1.jpg",
      heading: "Our Mission",
      paragraph:
        "Empowering businesses with innovative digital solutions to drive growth and enhance brand presence.",
    },
    {
      id: 2,
      imageUrl: "assets/img/features-2.jpg",
      heading: "Our Vision",
      paragraph:
        "To be a global leader in digital solutions, setting industry standards for creativity, innovation, and excellence.",
    },
    {
      id: 3,
      imageUrl: "assets/img/features-3.jpg",
      heading: "Core Values",
      paragraph:
        "Innovation, excellence, integrity, client-centricity, collaboration, adaptability, and accountability guide everything we do.",
    },
  ];
  return (
    <>
      <Helmet title="About Us">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage: 'url("assets/img/side-image-2.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>About Digital Marketing Inc</h3>
                  <p>
                    At Digi Marketing Inc, we are dedicated to transforming
                    businesses through innovative digital solutions. Founded on
                    the principles of excellence and creativity, we specialize
                    in a comprehensive range of services including digital
                    marketing, SEO, social media marketing, content writing,
                    graphic design, website development, mobile app development,
                    and augmented reality. Our team of skilled professionals is
                    committed to delivering tailored strategies that drive
                    growth and enhance brand presence in an ever-evolving
                    digital landscape. We pride ourselves on our ability to
                    understand the unique needs of our clients and provide
                    customized solutions that yield measurable results.
                    <br />
                    <br />
                    With a client-centric approach, we focus on building
                    long-term relationships based on trust, transparency, and
                    mutual success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Clients />

        <div id="features" className="features my-5">
          <div className="container">
            <div className="row">
              {box.map((item) => (
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch"
                  key={item.id}
                >
                  <div className="card aos-init aos-animate" data-aos="fade-up">
                    <img
                      src={item.imageUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <i className="bx bx-tachometer"></i>
                      <h5 className="card-title">{item.heading}</h5>
                      <p className="card-text">{item.paragraph}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default About;
