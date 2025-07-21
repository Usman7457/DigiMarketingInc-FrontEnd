import React from "react";
import Helmet from "../../layout/helmet";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const TestimonailOperations = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [totalTestimonial, setTotalTestimonial] = useState(0);

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const fetchTestimonial = async () => {
    try {
      const { data } = await axios.get(
        "https://digi-marketing-inc-back-end.vercel.app/api/testimonial/fetch-testimonial"
      );
      setTestimonial(data);
      setTotalTestimonial(data.length);
    } catch (error) {
      console.error("Error fetching Testimonial:", error);
    }
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values 12:", values);
      await axios.post(
        "https://digi-marketing-inc-back-end.vercel.app/api/testimonial/add-testimonial",
        values
      );
      toast.success("Testimonial Added!");
      fetchTestimonial();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed Adding Testimonial");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://digi-marketing-inc-back-end.vercel.app/api/testimonial/delete-testimonial/${id}`
      );
      toast.success("Testimonial deleted");
      fetchTestimonial();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete Testimonial");
    }
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
  };

  const handleCancelEdit = () => {
    setEditingTestimonial(null);
  };

  const handleSubmitEdit = async (editedTestimonialData) => {
    try {
      const { name, imageUrl, country, message } = editedTestimonialData;
      await axios.patch(
        `https://digi-marketing-inc-back-end.vercel.app/api/testimonial/update-testimonial/${editingTestimonial._id}`,
        {
          name,
          imageUrl,
          country,
          message,
        }
      );
      toast.success("Testimonial edited successfully");
      fetchTestimonial();
      setEditingTestimonial(null);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to edit Testimonial");
    }
  };

  return (
    <>
      <Helmet title="Testimonial Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Testimonial Operations</span>
              <h2>Testimonial Operations</h2>
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
                      country: "",
                      imageUrl: "",
                      message: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.name) {
                        errors.name = "Name Required";
                      }
                      if (!values.country) {
                        errors.country = "Country Required";
                      }
                      if (!values.imageUrl) {
                        errors.imageUrl = "Image Url Required";
                      }
                      if (!values.message) {
                        errors.message = "Message Required";
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
                              name="country"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.country}
                              className="form-control"
                              placeholder="Enter Country"
                            />
                            <p className="text-danger">
                              {errors.country &&
                                touched.country &&
                                errors.country}
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
                            <textarea
                              type="text"
                              name="message"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                              className="form-control"
                              rows="5"
                              placeholder="Enter Testimonial"
                            ></textarea>
                            <p className="text-danger">
                              {errors.message &&
                                touched.message &&
                                errors.message}
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" disabled={isSubmitting}>
                            Submit
                          </button>
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
                    <th>Testimonial Image</th>
                    <th>Testimonial Name</th>
                    <th>Testimonial Country</th>
                    <th>Testimonial Message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {testimonial.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`/assets/img/testimonials/${data.imageUrl}.jpg`}
                          alt="testimonial"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{data.name}</td>
                      <td>{data.country}</td>
                      <td>{data.message}</td>
                      <td>
                        <button onClick={() => handleEdit(data)}>
                          <i className="bx bx-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(data._id)}>
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Testimonials: {totalTestimonial}</p>
            </div>
          </div>
        </div>

        {editingTestimonial && (
          <EditTestimonialModal
            testimonial={editingTestimonial}
            onCancel={handleCancelEdit}
            onSubmit={handleSubmitEdit}
          />
        )}
      </Helmet>
      <ToastContainer />
    </>
  );
};

const EditTestimonialModal = ({ testimonial, onCancel, onSubmit }) => {
  const [editedTestimonial, setEditedTestimonial] = useState({
    name: testimonial.name,
    country: testimonial.country,
    imageUrl: testimonial.imageUrl,
    message: testimonial.message,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTestimonial({ ...editedTestimonial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedTestimonial);
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  value={editedTestimonial.name}
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
                  value={editedTestimonial.imageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="country">
                  Slug
                </label>
                <input
                  className="form-control"
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter New country"
                  value={editedTestimonial.country}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Enter New Message"
                  value={editedTestimonial.message}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Update Testimonial
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

export default TestimonailOperations;
