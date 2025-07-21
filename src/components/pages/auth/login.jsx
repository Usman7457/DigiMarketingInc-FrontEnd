import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Helmet from "../../layout/helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../../lib/local-storage";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, setSubmitting) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    try {
      const { data } = await axios.post(
<<<<<<< HEAD
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/users/login",
=======
        "http://localhost:4001/api/users/login",
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
        user
      );
      saveToken(data.token);
      toast.success("Login successfully");
      navigate("/admin-dashboard");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Login Failed, Try Again");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet title="Sign In">
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
                DMI - Sign In
              </h3>

              <Formik
                initialValues={{ email: "", password: "" }}
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
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values, setSubmitting);
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
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Please wait..." : "Sign In"}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="mt-3 text-center">
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot password?
                </Link>
              </div>
              <div className="mt-3 text-center">
                <span>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-decoration-none">
                    Sign Up
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

export default Login;
