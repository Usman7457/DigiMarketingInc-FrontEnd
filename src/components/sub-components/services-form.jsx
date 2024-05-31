import React from "react";
import { Formik } from "formik";

const ServicesForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          userName: "",
          phoneNumber: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email Address Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.userName) {
            errors.userName = "User Name Required";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Phone Number Required";
          }
          if (!values.message) {
            errors.message = "Message Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {}}
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
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              className="form-control mb-2"
              placeholder="Enter Your Name"
            />
            <p className="text-danger">
              {errors.userName && touched.userName && errors.userName}
            </p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="form-control mb-2"
              placeholder="Enter Valid Email Address"
            />
            <p className="text-danger">
              {errors.email && touched.email && errors.email}
            </p>
            <input
              type="tel"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              className="form-control mb-2"
              placeholder="Enter Valid Phone Number"
            />
            <p className="text-danger">
              {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
            </p>
            <textarea
              type="text"
              rows="4"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className="form-control mb-2"
              placeholder="Enter Your Message"
            />
            <p className="text-danger">
              {errors.message && touched.message && errors.message}
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary text-center mt-2"
            >
              Send Message
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ServicesForm;
