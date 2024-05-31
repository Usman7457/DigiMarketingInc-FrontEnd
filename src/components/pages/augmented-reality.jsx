import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const AugmentedReality = () => {
  return (
    <>
      <Helmet title="Augmented Reality">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/augmented-reality.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Augmented Reality</h3>
                  <p>
                    Augmented reality (AR) is an interactive experience that
                    blends digital content with the real world. It enhances our
                    perception of reality by overlaying digital information such
                    as images, videos, sounds, and 3D models onto the physical
                    environment. Unlike virtual reality (VR), which immerses
                    users in a completely artificial world, augmented reality
                    adds digital elements to the existing physical world.
                    <br />
                    <br />
                    AR technology works by using a device such as a smartphone
                    or a tablet with a camera and a screen. The camera captures
                    the user’s surroundings, and the AR software processes the
                    visual data in real time to identify and track objects and
                    surfaces. Then, the digital content is projected onto the
                    physical environment, creating an illusion that the digital
                    elements are part of the real world. AR has the potential to
                    revolutionize the way we interact with the world around us
                    by providing immersive and engaging experiences that enhance
                    our perception of reality.
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
                  <h3>How does augmented reality work?</h3>
                  <p>
                    Our augmented reality service works through a comprehensive
                    planning, development, and deployment process. The first
                    step is to identify the goals and objectives of the project
                    and conduct a thorough analysis of the target audience and
                    market. We then develop a strategy that outlines the
                    approach and timeline for the project.
                    <br />
                    <br />
                    The next step is developing the augmented reality
                    experience. It also involves creating 3D models and
                    animations, integrating them with the real-world
                    environment, and programming user interactions. We use the
                    latest tools and technologies to ensure the highest quality
                    and functionality of the augmented reality experience.
                    <br />
                    <br />
                    We use various 3D modeling tools like Blender and Maya to
                    create high-quality 3D models for our augmented reality
                    experiences.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/augmented-reality2.png")',
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

export default AugmentedReality;
