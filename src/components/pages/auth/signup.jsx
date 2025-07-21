import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../../layout/helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post(
        "https://digi-marketing-inc-back-end.vercel.app/api/users/register",
        values
      );
      toast.success("Registered successfully!");
      navigate("/login");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      if (
        error.response &&
        error.response.data.message === "User Already Exsists."
      ) {
        toast.error("Email Already Exsist, Please Try New Email.");
      } else {
        toast.error("Failed Adding User");
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Helmet title="Sign Up">
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
                DMI - Sign Up
              </h3>

              <Formik
                initialValues={{ userName: "", email: "", password: "" }}
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
                  if (!values.password) {
                    errors.password = "Password Required";
                  }
                  if (!values.userName) {
                    errors.userName = "User Name Required";
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
                    <div className="mb-3">
                      <input
                        type="text"
                        name="userName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${
                          errors.userName && touched.userName
                            ? "is-invalid"
                            : ""
                        }`}
                        value={values.userName}
                        placeholder="Enter Your Full Name"
                      />
                      <div className="invalid-feedback">
                        {errors.userName && touched.userName && errors.userName}
                      </div>
                    </div>
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
                        placeholder="Enter Your Valid Email"
                      />
                      <div className="invalid-feedback">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={`form-control ${
                          errors.password && touched.password
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter Your Password"
                      />
                      <div className="invalid-feedback">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Please wait..." : "Sign Up"}
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

export default SignUp;
