import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../layout/helmet";

const SiteMap = () => {
  return (
    <>
      <Helmet title="Site Map">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Site Map</span>
              <h2>Site Map</h2>
              <p>Explore the structure of our website below.</p>
            </div>
            <div className="container mt-2">
              <div className="row">
                <div className="col-md-4 my-2">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <Link to="/about">About Page</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 my-2">
                  <h3>Portfolio</h3>
                  <ul>
                    <li>
                      <Link to="/portfolio">Portfolio Page</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 my-2">
                  <h3>Pricing</h3>
                  <ul>
                    <li>
                      <Link to="/pricing">Pricing Page</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 my-2">
                  <h3>Team</h3>
                  <ul>
                    <li>
                      <Link to="/team">Team Page</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 my-2">
                  <h3>Blog</h3>
                  <ul>
                    <li>
                      <Link to="/blog">Blog Page</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 my-2">
                  <h3>Contact</h3>
                  <ul>
                    <li>
                      <Link to="/contact">Contact Page</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 my-2">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <Link to="/services">Services Page</Link>
                      <ul>
                        <li className="my-1">
                          <Link to="/digital-marketing">
                            Digital Marketing Page
                          </Link>
                          <ul>
                            <li className="my-1">
                              <Link to="/social-media-marketing">
                                Social Media Marketing Page
                              </Link>
                            </li>
                            <li className="my-1">
                              <Link to="/search-engine-marketing">
                                Search Engine Marketing Page
                              </Link>
                            </li>
                            <li className="my-1">
                              <Link to="/search-engine-optimization">
                                Search Engine Optimization Page
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="my-1">
                          <Link to="/software-development">
                            Software Development Page
                          </Link>
                          <ul>
                            <li className="my-1">
                              <Link to="/website-development">
                                Website Development Page
                              </Link>
                            </li>
                            <li className="my-1">
                              <Link to="/mobile-app-development">
                                Mobile App Development Page
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="my-1">
                          <Link to="/graphic-designing">
                            Graphic Designing Page
                          </Link>
                          <ul>
                            <li className="my-1">
                              <Link to="/logo-design">Logo Design Page</Link>
                            </li>
                            <li className="my-1">
                              <Link to="/game-design">Game Design Page</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="my-1">
                          <Link to="/content-writing">
                            Content Writing Page
                          </Link>
                        </li>
                        <li className="my-1">
                          <Link to="/augmented-reality">
                            Augmented Reality Page
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default SiteMap;
