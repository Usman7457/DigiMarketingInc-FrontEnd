import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Services = () => {
  const box = [
    {
      id: 1,
      title: "Website Design",
      description:
        "Transforming visions into captivating digital experiences through expert website design.",
      link: "/website-design",
      delay: "100",
      icon: "bi bi-globe",
    },
    {
      id: 2,
      title: "Mobile App Design",
      description:
        "Crafting intuitive and engaging mobile experiences that resonate with users, powered by expert app design.",
      link: "/mobile-app-design",
      delay: "200",
      icon: "bi bi-phone",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description:
        "Strategically elevating brands and fostering connections through dynamic social media marketing.",
      link: "/social-media-marketing",
      delay: "300",
      icon: "bi bi-bar-chart",
    },
    {
      id: 4,
      title: "Search Engine Optimization",
      description:
        "Driving visibility and growth through strategic search engine optimization strategies.",
      link: "/search-engine-optimization",
      delay: "400",
      icon: "bi bi-search",
    },
    {
      id: 5,
      title: "Contant Writing",
      description:
        "Captivating audiences and sparking engagement through compelling and tailored content writing.",
      link: "/content-writing",
      delay: "500",
      icon: "bi bi-pencil",
    },
    {
      id: 6,
      title: "Augmented Reality",
      description:
        "Unlocking immersive experiences and reshaping realities through cutting-edge augmented reality solutions.",
      link: "/augmented-reality",
      delay: "600",
      icon: "bi bi-calendar4-week",
    },
  ];
  return (
    <>
      <Helmet>
        <title>DMI - Services</title>
      </Helmet>
      <div id="services" className="services mt-5">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-down"
          >
            <span>Services</span>
            <h2>Services</h2>
            <p>
              Elevate Your Brand: Explore Our Comprehensive Suite of
              Cutting-Edge Services.
            </p>
          </div>

          <div className="row">
            {box.map((item) => (
              <div
                className="col-md-6"
                style={{ marginBottom: "-50px" }}
                key={item.id}
              >
                <div
                  className="icon-box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <i className={item.icon}></i>
                  <h4>
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
