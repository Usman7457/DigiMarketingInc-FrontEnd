import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Footer = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values:", values);
      await axios.post(
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/subscriber/add-subscriber",
        values
      );
      toast.success("Subscriber Added!");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);

      if (
        error.response &&
        error.response.data.message === "Email already added"
      ) {
        toast.error("You are already subscribed");
      } else {
        toast.error("Failed Adding Subscriber");
      }
    } finally {
      setSubmitting(false);
    }
  };
  const box = [
    {
      id: 1,
      heading: "Useful Links",
      title1: "About - DMI",
      link1: "/about",
      title2: "DMI - Services",
      link2: "/services",
      title3: "DMI - Portfolio",
      link3: "/portfolio",
      title4: "DMI - Team",
      link4: "/team",
      title5: "News & Events",
      link5: "/blog",
    },
    {
      id: 2,
      heading: "Top Services",
      title1: "Website Development",
      link1: "/website-development",
      title2: "Mobile App Development",
      link2: "/mobile-app-development",
      title3: "Software Development",
      link3: "/software-development",
      title4: "Graphic Designing",
      link4: "/graphic-designing",
      title5: "Content Writing",
      link5: "/content-writing",
    },
    {
      id: 3,
      heading: "Need Help?",
      title1: "Disclaimer",
      link1: "/disclaimer",
      title2: "Terms & Conditions",
      link2: "/terms-and-conditions",
      title3: "Privacy Policy",
      link3: "/privacy-policy",
      title4: "Refund Policy",
      link4: "/refund-policy",
      title5: "Site Map",
      link5: "/site-map",
    },
  ];
  return (
    <>
      <div id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Stay Informed: Your Weekly Digest of Insights and Updates.
                </p>
                <Formik
                  initialValues={{ email: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Email Address Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values, { setSubmitting });
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter Your Valid Email Address"
                        required
                      />
                      <input type="submit" value="Subscribe" />
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Digi Marketing Inc</h3>
                <p>
                  Rua Rui de Pina 138 Vila Nova de Gaia
                  <br />
                  4400-287.
                  <br />
                  <br />
                  <strong>Phone:</strong> +351 93484 4649
                  <br />
                  <strong>Email:</strong> info@digimarketinginc.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://mobile.twitter.com/DigiSales"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/digimarketinginc"
                    className="facebook mx-1"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/digimarketinginc/"
                    className="instagram mx-1"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@digitalmarketingincdigi5454"
                    className="youtube"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/digi-marketing-inc/about/"
                    className="linkedin mx-1"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>

              {box.map((item) => (
                <div className="col-lg-3 col-md-6 footer-links" key={item.id}>
                  <h4>{item.heading}</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>
                      <Link to={item.link1}>{item.title1}</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to={item.link2}>{item.title2}</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to={item.link3}>{item.title3}</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to={item.link4}>{item.title4}</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to={item.link5}>{item.title5}</Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="copyright">
            &copy; Copyrights 2024 -{" "}
            <strong>
              <span>Digi Marketing Inc</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by -{" "}
            <a
              href="https://sh-m-usman-ghani.web.app/"
              style={{ color: "#4eb478" }}
            >
              Sheikh Muhammad Usman Ghani
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Footer;
