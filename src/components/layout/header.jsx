import React from "react";
import { Link } from "react-router-dom";
import LogoutButtons from "./logout-button";

const Header = () => {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <Link to="/">
                <span>Digi Marketing Inc</span>
              </Link>
            </h1>
          </div>

          <div id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about">
                  About
                </Link>
              </li>
              <li className="dropdown">
                <Link to="/services">
                  <span>Services</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li className="dropdown">
                    <Link to="/digital-marketing">
                      <span>Digital Marketing</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/social-media-marketing"
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/search-engine-marketing"
                        >
                          Search Engine Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/search-engine-optimization"
                        >
                          Search Engine Optimization
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="/software-development">
                      <span>Software Development</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/website-development"
                        >
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/mobile-app-development"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="/graphic-designing">
                      <span>Graphic Designing</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link className="nav-link scrollto" to="/logo-design">
                          Logo Design
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/game-design">
                          Game Design
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="/content-writing">
                      Content Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="/augmented-reality">
                      Augmented Reality
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="mx-2 mt-2">
                <LogoutButtons />
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
