import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      <div id="cta" className="cta">
        <div className="container">
          <div className="text-center aos-init aos-animate" data-aos="zoom-in">
            <h3>Excited about your project?</h3>
            <p>
              {" "}
              We're passionate about bringing visions to life! Whether it's
              crafting captivating visuals, developing innovative software, or
              boosting your online presence, we're here to make it happen. Let's
              collaborate and turn your ideas into remarkable realities. Share
              your project with us today, and let's embark on this journey
              together towards success!
            </p>
            <Link className="cta-btn" to="/contact">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
