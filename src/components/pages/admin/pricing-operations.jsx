import React from "react";
import Helmet from "../../layout/helmet";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const PricingOperations = () => {
  const [pricing, setPricing] = useState([]);
  const [editingPricing, setEditingPricing] = useState(null);
  const [totalPackages, setTotalPackages] = useState(0);

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const { data } = await axios.get(
<<<<<<< HEAD
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/pricing/fetch-pricing"
=======
        "http://localhost:4001/api/pricing/fetch-pricing"
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      setPricing(data);
      setTotalPackages(data.length);
    } catch (error) {
      console.error("Error fetching Blog:", error);
    }
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values 12:", values);
<<<<<<< HEAD
      await axios.post(
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/pricing/add-pricing",
        values
      );
=======
      await axios.post("http://localhost:4001/api/pricing/add-pricing", values);
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      toast.success("Blog Added!");
      fetchPricing();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed Adding Blog");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
<<<<<<< HEAD
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/pricing/delete-pricing/${id}`
=======
        `http://localhost:4001/api/pricing/delete-pricing/${id}`
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      toast.success("Blog deleted");
      fetchPricing();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete Blog");
    }
  };

  const handleEdit = (pricing) => {
    setEditingPricing(pricing);
  };

  const handleCancelEdit = () => {
    setEditingPricing(null);
  };

  const handleSubmitEdit = async (editedPricingData) => {
    try {
      const { title, price, feature, cls } = editedPricingData;
      await axios.patch(
<<<<<<< HEAD
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/pricing/update-pricing/${editingPricing._id}`,
=======
        `http://localhost:4001/api/pricing/update-pricing/${editingPricing._id}`,
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
        {
          title,
          price,
          feature,
          cls,
        }
      );
      toast.success("Pricing edited successfully");
      fetchPricing();
      setEditingPricing(null);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to edit Pricing");
    }
  };

  return (
    <>
      <Helmet title="Pricing Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Pricing Operations</span>
              <h2>Pricing Operations</h2>
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
                      title: "",
                      price: "",
                      features: "",
                      cls: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.title) {
                        errors.title = "Package Title Required";
                      }
                      if (!values.price) {
                        errors.price = "Price Required";
                      }
                      if (!values.features) {
                        errors.features = "Features Required";
                      }
                      if (!values.cls) {
                        errors.cls = "Class Required";
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
                        <div className="row">
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="title"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.title}
                              className="form-control"
                              placeholder="Enter Title"
                            />
                            <p className="text-danger">
                              {errors.title && touched.title && errors.title}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="price"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.price}
                              className="form-control"
                              placeholder="Enter Price"
                            />
                            <p className="text-danger">
                              {errors.price && touched.price && errors.price}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="cls"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.cls}
                              className="form-control"
                              placeholder="Enter (col-lg-4 box (fea) aos-init aos-animate)"
                            />
                            <p className="text-danger">
                              {errors.cls && touched.cls && errors.cls}
                            </p>
                          </div>
                          <div className="col-md-12 form-group">
                            <textarea
                              type="text"
                              name="features"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.features}
                              className="form-control"
                              rows="5"
                              placeholder="Enter Features"
                            ></textarea>
                            <p className="text-danger">
                              {errors.features &&
                                touched.features &&
                                errors.features}
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
                    <th>Package Name</th>
                    <th>Package Price</th>
                    <th>Package Details</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {pricing.map((pricing, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{pricing.title}</td>
                      <td>$ {pricing.price}</td>
                      <td>{pricing.features}</td>
                      <td>
                        <button onClick={() => handleEdit(pricing)}>
                          <i className="bx bx-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(pricing._id)}>
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Packages: {totalPackages}</p>
            </div>
          </div>
        </div>

        {editingPricing && (
          <EditPricingModal
            pricing={editingPricing}
            onCancel={handleCancelEdit}
            onSubmit={handleSubmitEdit}
          />
        )}
      </Helmet>
      <ToastContainer />
    </>
  );
};

const EditPricingModal = ({ pricing, onCancel, onSubmit }) => {
  const [editedPricing, setEditedPricing] = useState({
    title: pricing.title,
    price: pricing.price,
    features: pricing.features,
    cls: pricing.cls,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPricing({ ...editedPricing, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedPricing);
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="title">
                  Pricing Title
                </label>
                <input
                  className="form-control"
                  id="title"
                  name="title"
                  type="text"
                  value={editedPricing.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="price">
                  Price
                </label>
                <input
                  className="form-control"
                  id="price"
                  name="price"
                  type="text"
                  value={editedPricing.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="cls">
                  Class
                </label>
                <input
                  className="form-control"
                  id="cls"
                  name="cls"
                  type="text"
                  placeholder="Enter New cls"
                  value={editedPricing.cls}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="features">
                  Features
                </label>
                <textarea
                  className="form-control"
                  id="features"
                  name="features"
                  type="text"
                  placeholder="Enter New Message"
                  value={editedPricing.features}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Update Package
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

export default PricingOperations;
