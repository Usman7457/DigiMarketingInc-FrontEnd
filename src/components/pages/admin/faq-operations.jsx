import React from "react";
import Helmet from "../../layout/helmet";
import { Formik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const FaqOperations = () => {
  const [faq, setFaq] = useState([]);
  const [editingFaq, setEditingFaq] = useState(null);
  const [totalFaqs, setTotalFaqs] = useState(0);

  useEffect(() => {
    fetchFaq();
  }, []);

  const fetchFaq = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/faq/fetch-faq"
      );
      setFaq(data);
      setTotalFaqs(data.length);
    } catch (error) {
      console.error("Error fetching Faqs:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values 12:", values);
      await axios.post("http://localhost:4001/api/faq/add-faq", values);
      toast.success("Faq Added successfully!");
      fetchFaq();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed To Add Faq");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/api/faq/delete-faq/${id}`);
      toast.success("FAQ deleted successfully");
      fetchFaq();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete FAQ");
    }
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
  };

  const handleCancelEdit = () => {
    setEditingFaq(null);
  };

  const handleSubmitEdit = async (editedFaqData) => {
    try {
      const { target, question, answer } = editedFaqData;
      await axios.patch(
        `http://localhost:4001/api/faq/update-faq/${editingFaq._id}`,
        {
          target,
          question,
          answer,
        }
      );
      toast.success("Faq edited successfully");
      fetchFaq();
      setEditingFaq(null);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to edit Faq");
    }
  };

  return (
    <>
      <Helmet title="FAQ Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>FAQ Operations</span>
              <h2>FAQ Operations</h2>
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
                      target: "",
                      question: "",
                      answer: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.target) {
                        errors.target = "Target Required";
                      }
                      if (!values.question) {
                        errors.question = "Question Required";
                      }
                      if (!values.answer) {
                        errors.answer = "Answer Required";
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
                              name="target"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.target}
                              className="form-control"
                              placeholder="Enter target (faq-list-X)"
                            />
                            <p className="text-danger">
                              {errors.target && touched.target && errors.target}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="question"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.question}
                              className="form-control"
                              placeholder="Enter Question"
                            />
                            <p className="text-danger">
                              {errors.question &&
                                touched.question &&
                                errors.question}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="text"
                              name="answer"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.answer}
                              className="form-control"
                              placeholder="Enter Answer"
                            />
                            <p className="text-danger">
                              {errors.answer && touched.answer && errors.answer}
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
                    <th>Target</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {faq.map((faq, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{faq.target}</td>
                      <td>{faq.question}</td>
                      <td>{faq.answer}</td>
                      <td>
                        <button onClick={() => handleEdit(faq)}>
                          <i className="bx bx-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(faq._id);
                          }}
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total FAQs: {totalFaqs}</p>
            </div>
          </div>
        </div>

        {editingFaq && (
          <EditFaqModal
            faq={editingFaq}
            onCancel={handleCancelEdit}
            onSubmit={handleSubmitEdit}
          />
        )}
      </Helmet>
      <ToastContainer />
    </>
  );
};

const EditFaqModal = ({ faq, onCancel, onSubmit }) => {
  const [editedFaq, setEditedFaq] = useState({
    target: faq.target,
    question: faq.question,
    answer: faq.answer,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedFaq({ ...editedFaq, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedFaq);
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="target">
                  Faq Target
                </label>
                <input
                  className="form-control"
                  id="target"
                  name="target"
                  type="text"
                  value={editedFaq.target}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="question">
                  Question
                </label>
                <input
                  className="form-control"
                  id="question"
                  name="question"
                  type="text"
                  value={editedFaq.question}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="answer">
                  Answer
                </label>
                <input
                  className="form-control"
                  id="answer"
                  name="answer"
                  type="text"
                  placeholder="Enter New answer"
                  value={editedFaq.answer}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Update FAQ
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

export default FaqOperations;
