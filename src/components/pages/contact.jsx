import React from "react";
import { Formik } from "formik";
import Helmet from "../layout/helmet";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values 12:", values);
      await axios.post(
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/contact-form/add-contact-form",
        values
      );
      toast.success("Message Send Successfully");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Error Sending Message");
    }
  };
  const contactBox = [
    {
      id: 1,
      icon: "bx bx-map",
      title: "Find Us",
      description: "Rua Rui de Pina 138 Vila",
      description2: "Nova de Gaia 4400-287.",
      cls: "col-lg-4 col-md-12 aos-init aos-animate",
      delay: "100",
    },
    {
      id: 2,
      icon: "bx bx-envelope",
      title: "Email Us",
      description: "info@digimarketinginc.com",
      description2: "contact@digimarketinginc.com",
      cls: "col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate",
      delay: "200",
    },
    {
      id: 3,
      icon: "bx bx-phone-call",
      title: "Call Us",
      description: "+351 93484 4649",
      description2: "+92 325 5514125",
      cls: "col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate",
      delay: "300",
    },
  ];
  return (
    <>
      <Helmet title="Contact Us">
        <div id="contact" className="contact my-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Contact Us</span>
              <h2>Contact Us</h2>
              <p>
                Let's Connect: Reach Out to Us Today and Start Your Journey
                Towards Success.
              </p>
            </div>

            <div className="row justify-content-center">
              {contactBox.map((item) => (
                <div
                  className={item.cls}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  key={item.id}
                >
                  <div className="info-box">
                    <i className={item.icon}></i>
                    <h3>{item.title}</h3>
                    <p>
                      {item.description}
                      <br /> {item.description2}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="php-email-form mt-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Formik
                initialValues={{ name: "", email: "", phone: "", message: "" }}
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
                  if (!values.name) {
                    errors.name = "Full Name Required";
                  }
                  if (!values.phone) {
                    errors.phone = "Phone Number Required";
                  }
                  if (!values.message) {
                    errors.message = "Requirements Required";
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
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          className="form-control"
                          placeholder="Enter Your Full Name"
                        />
                        <p className="text-danger">
                          {errors.name && touched.name && errors.name}
                        </p>
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="form-control"
                          placeholder="Enter Your Valid Email Address"
                        />
                        <p className="text-danger">
                          {errors.email && touched.email && errors.email}
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        className="form-control"
                        placeholder="Enter Your Valid Phone Number With Country Code"
                      />
                      <p className="text-danger">
                        {errors.phone && touched.phone && errors.phone}
                      </p>
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        type="text"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        className="form-control"
                        rows="5"
                        placeholder="Enter Your Requirements In Detail"
                      ></textarea>
                      <p className="text-danger">
                        {errors.message && touched.message && errors.message}
                      </p>
                    </div>
                    <div className="text-center">
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Helmet>
      <ToastContainer />
    </>
  );
};

export default Contact;
