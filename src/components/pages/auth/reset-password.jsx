import React from "react";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import Helmet from "../../layout/helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const { id } = useParams();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.patch(
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/users/reset-password/${id}`,
        {
          password: values.password,
        }
      );
      toast.success("Password Updated! Login with the new password.");
    } catch (error) {
      console.error("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed to update password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet title="Reset Password">
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
                Reset Password
              </h3>

              <Formik
                initialValues={{ password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.password) {
                    errors.password = "Password Required";
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
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${
                          errors.password && touched.password
                            ? "is-invalid"
                            : ""
                        }`}
                        value={values.password}
                        placeholder="Enter New Password"
                      />
                      {errors.password && touched.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Please wait..." : "Update Password"}
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
            </div>
          </div>
        </div>
      </Helmet>
      <ToastContainer />
    </>
  );
};

export default ResetPassword;
