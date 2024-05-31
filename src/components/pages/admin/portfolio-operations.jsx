import React from "react";
import Helmet from "../../layout/helmet";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const PortfolioOperations = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [editingPortfolio, setEditingPortfolio] = useState(null);
  const [totalPortfolios, setTotalPortfolios] = useState(0);
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/portfolio/fetch-portfolio"
      );
      setPortfolio(data);
      setTotalPortfolios(data.length);
    } catch (error) {
      console.error("Error fetching Portfolio:", error);
    }
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values 12:", values);
      await axios.post(
        "http://localhost:4001/api/portfolio/add-portfolio",
        values
      );
      toast.success("Portfolio Added!");
      fetchPortfolio();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed Adding Portfolio");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4001/api/portfolio/delete-portfolio/${id}`
      );
      toast.success("Portfolio deleted");
      fetchPortfolio();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete Portfolio");
    }
  };

  const handleEdit = (portfolio) => {
    setEditingPortfolio(portfolio);
  };

  const handleCancelEdit = () => {
    setEditingPortfolio(null);
  };

  const handleSubmitEdit = async (editedPortflolioData) => {
    try {
      const { name, imageUrl, slug, type } = editedPortflolioData;
      await axios.patch(
        `http://localhost:4001/api/portfolio/update-portfolio/${editingPortfolio._id}`,
        {
          name,
          imageUrl,
          slug,
          type,
        }
      );
      toast.success("Portfolio edited successfully");
      fetchPortfolio();
      setEditingPortfolio(null);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to edit Portfolio");
    }
  };

  return (
    <>
      <Helmet title="Portfolio Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Portfolio Operations</span>
              <h2>Portfolio Operations</h2>
            </div>

            <div
              id="contact"
              className="contact mb-5"
              style={{ marginTop: "-25px" }}
            >
              <div className="container">
                <div
                  className="php-email-form mt-4 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Formik
                    initialValues={{
                      name: "",
                      type: "",
                      imageUrl: "",
                      slug: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.name) {
                        errors.name = "Name Required";
                      }
                      if (!values.type) {
                        errors.type = "Type Required";
                      }
                      if (!values.imageUrl) {
                        errors.imageUrl = "Image Url Required";
                      }
                      if (!values.slug) {
                        errors.slug = "Slug Required";
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
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              className="form-control"
                              placeholder="Enter Name"
                            />
                            <p className="text-danger">
                              {errors.name && touched.name && errors.name}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="type"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.type}
                              className="form-control"
                              placeholder="Enter Type (web, logo, app)"
                            />
                            <p className="text-danger">
                              {errors.type && touched.type && errors.type}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="imageUrl"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.imageUrl}
                              className="form-control"
                              placeholder="Enter Image Url"
                            />
                            <p className="text-danger">
                              {errors.imageUrl &&
                                touched.imageUrl &&
                                errors.imageUrl}
                            </p>
                          </div>
                          <div className="col-md-12 form-group">
                            <input
                              type="text"
                              name="slug"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.slug}
                              className="form-control"
                              placeholder="Enter Slug"
                            />
                            <p className="text-danger">
                              {errors.slug && touched.slug && errors.slug}
                            </p>
                          </div>
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

            <div className="container">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Portfolio Image</th>
                    <th>Project Name</th>
                    <th>Project Category</th>
                    <th>Portfolio Slug</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {portfolio.map((portfolio, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={portfolio.imageUrl}
                          alt="portfolio"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{portfolio.name}</td>
                      <td>{portfolio.type}</td>
                      <td>{portfolio.slug}</td>
                      <td>
                        <button onClick={() => handleEdit(portfolio)}>
                          <i className="bx bx-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(portfolio._id);
                          }}
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Portfolios: {totalPortfolios}</p>
            </div>
          </div>
        </div>

        {editingPortfolio && (
          <EditPortfolioModal
            portfolio={editingPortfolio}
            onCancel={handleCancelEdit}
            onSubmit={handleSubmitEdit}
          />
        )}
      </Helmet>
      <ToastContainer />
    </>
  );
};

const EditPortfolioModal = ({ portfolio, onCancel, onSubmit }) => {
  const [editedPortfolio, setEditedPortfolio] = useState({
    name: portfolio.name,
    slug: portfolio.slug,
    imageUrl: portfolio.imageUrl,
    type: portfolio.type,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPortfolio({ ...editedPortfolio, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedPortfolio);
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="name">
                  Portfolio Title
                </label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  value={editedPortfolio.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="imageUrl">
                  image Url
                </label>
                <input
                  className="form-control"
                  id="imageUrl"
                  name="imageUrl"
                  type="text"
                  value={editedPortfolio.imageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="slug">
                  Slug
                </label>
                <input
                  className="form-control"
                  id="slug"
                  name="slug"
                  type="text"
                  placeholder="Enter New Slug"
                  value={editedPortfolio.slug}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="type">
                  Type
                </label>
                <input
                  className="form-control"
                  id="type"
                  name="type"
                  type="text"
                  placeholder="Enter New type"
                  value={editedPortfolio.type}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Update Portfolio
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="btn btn-danger"
                >
                  X
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOperations;
