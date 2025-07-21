import React from "react";
import Helmet from "../layout/helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet title="404 - Page Not Found">
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="error-container text-center p-4 bg-white shadow rounded">
            <h1 className="display-1">404</h1>
            <h2 className="my-3">Page Not Found</h2>
            <p className="mb-4">
              Sorry, the page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <Link to="/" className="btn btn-primary">
              Go to Homepage
            </Link>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default NotFound;
