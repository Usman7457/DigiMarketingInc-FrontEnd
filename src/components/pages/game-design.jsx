import React from "react";
import CallToAction from "../sub-components/call-to-action";
import Helmet from "../layout/helmet";

const GameDesign = () => {
  return (
    <>
      <Helmet title="Game Design">
        <div id="about" className="about my-5">
          <div className="container">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/game-design-2.png")',
                }}
                data-aos="fade-right"
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              ></div>
              <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
                <div
                  className="content d-flex flex-column justify-content-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Logo Design</h3>
                  <p>
                    We believe in customer and client relationship as we both
                    needs to work as a team with great level of understand and
                    clear communication. Our intake process is designed in a
                    very friendly yet professional way in which we initially
                    take all the basic details and initial brief of the project
                    to understand the product and its market & then we act on it
                    accordingly. This creates a gateway for each decision we
                    make to align with your business goals in mind and this way
                    we help businesses elevate their value through creative
                    brand and marketing solutions. With the help of our clients
                    and our expert creative team. We come up with a branding /
                    marketing solution for our clients with a quantifiable
                    expected result.
                    <br />
                    <br />
                    Our smart working in past few years helped us grow with
                    great pace and enthusiasm. Which made us open new domains in
                    Animations & 3D modeling as our customer demands were
                    continually increasing. We aim to be trusted partner and no
                    1 choice of our customers by providing complete solution for
                    their business and marketing needs.
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
                  <h3>OUR COMPREHENSIVE PROCESS</h3>
                  <p>
                    Our creative design process is well established thought the
                    team. We start us great imagination, then bring that to our
                    studio so that our designers can bring that idea on canvas,
                    one the artwork is ready the account manager check that all
                    the brief and areas from the initial brief or from the
                    revision is covered.
                    <br />
                    <br />
                    The management takes a final look before sending it to
                    customer for review. This process take place in all of our
                    domains with multiple teams working on different projects
                    simultaneously.
                    <br />
                    <br />
                  </p>
                  <ul>
                    <li>Research</li>
                    <li>Design & Development</li>
                    <li>Finalization</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("assets/service-images/game-design.png")',
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

export default GameDesign;
