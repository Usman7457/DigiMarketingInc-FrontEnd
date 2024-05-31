import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Helmet from "../../layout/helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post(
        `http://localhost:4001/api/users/forgot-password/${values.email}`,
        values
      );
      toast.success("Password reset link sent to your email");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed to send an email");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet title="Forgot Password">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div
            className="card p-4 shadow"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <div className="card-body">
              <h3
                className="text-center mb-4 fw-semibold"
                style={{ fontFamily: "Raleway", fontWeight: "600" }}
              >
                Forgot Password?
              </h3>

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
                onSubmit={handleSubmit}
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
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${
                          errors.email && touched.email ? "is-invalid" : ""
                        }`}
                        value={values.email}
                        placeholder="Enter Your Email"
                      />
                      <div className="invalid-feedback">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Please wait..."
                          : "Request New Password"}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="mt-3 text-center">
                <span>
                  Already have an account?{" "}
                  <Link to="/login" className="text-decoration-none">
                    Sign In
                  </Link>
                </span>
              </div>
              <div className="mt-3 text-center">
                <span>
                  <Link to="/" className="text-decoration-none">
                    Back To Website
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
