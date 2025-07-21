import React from "react";
import Helmet from "../../layout/helmet";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const BlogOperations = () => {
  const [blog, setBlog] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(
<<<<<<< HEAD
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/blog/fetch-blog"
=======
        "http://localhost:4001/api/blog/fetch-blog"
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      setBlog(data);
      setTotalBlogs(data.length);
    } catch (error) {
      console.error("Error fetching Blog:", error);
    }
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
<<<<<<< HEAD
      await axios.post(
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/blog/add-blog",
        values
      );
=======
      await axios.post("http://localhost:4001/api/blog/add-blog", values);
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      toast.success("Blog Added!");
      fetchBlog();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed Adding Blog");
    }
  };
  const handleDelete = async (id) => {
    try {
<<<<<<< HEAD
      await axios.delete(
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/blog/delete-blog/${id}`
      );
=======
      await axios.delete(`http://localhost:4001/api/blog/delete-blog/${id}`);
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      toast.success("Blog deleted");
      fetchBlog();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete Blog");
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  const handleCancelEdit = () => {
    setEditingBlog(null);
  };

  const handleSubmitEdit = async (editedBlogData) => {
    try {
      const { heading, imageUrl, slug, paragraph } = editedBlogData;
      await axios.patch(
<<<<<<< HEAD
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/blog/update-blog/${editingBlog._id}`,
=======
        `http://localhost:4001/api/blog/update-blog/${editingBlog._id}`,
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
        {
          heading,
          imageUrl,
          slug,
          paragraph,
        }
      );
      toast.success("Blog edited successfully");
      fetchBlog();
      setEditingBlog(null);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to edit Blog");
    }
  };

  return (
    <>
      <Helmet title="Blog Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Blog Operations</span>
              <h2>Blog Operations</h2>
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
                      heading: "",
                      imageUrl: "",
                      slug: "",
                      paragraph: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.heading) {
                        errors.heading = "Heading Required";
                      }
                      if (!values.imageUrl) {
                        errors.imageUrl = "Image Url Required";
                      }
                      if (!values.paragraph) {
                        errors.paragraph = "Paragraph Required";
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
                              name="heading"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.heading}
                              className="form-control"
                              placeholder="Enter Blog Heading"
                            />
                            <p className="text-danger">
                              {errors.heading &&
                                touched.heading &&
                                errors.heading}
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
                              placeholder="Enter Image URL"
                            />
                            <p className="text-danger">
                              {errors.imageUrl &&
                                touched.imageUrl &&
                                errors.imageUrl}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
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
                          <div className="col-md-12 form-group">
                            <textarea
                              type="text"
                              name="paragraph"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.paragraph}
                              className="form-control"
                              rows="5"
                              placeholder="Enter Blog Description"
                            ></textarea>
                            <p className="text-danger">
                              {errors.paragraph &&
                                touched.paragraph &&
                                errors.paragraph}
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
                    <th>Blog Image</th>
                    <th>Blog Heading</th>
                    <th>Blog Description</th>
                    <th>Blog Slug</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {blog.map((blog, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={blog.imageUrl}
                          alt="blog"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{blog.heading}</td>
                      <td>{blog.paragraph}</td>
                      <td>{blog.slug}</td>
                      <td>
                        <button onClick={() => handleEdit(blog)}>
                          <i className="bx bx-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(blog._id);
                          }}
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Blogs: {totalBlogs}</p>
            </div>
          </div>
        </div>

        {editingBlog && (
          <EditBlogModal
            blog={editingBlog}
            onCancel={handleCancelEdit}
            onSubmit={handleSubmitEdit}
          />
        )}
      </Helmet>
      <ToastContainer />
    </>
  );
};

const EditBlogModal = ({ blog, onCancel, onSubmit }) => {
  const [editedBlog, setEditedBlog] = useState({
    heading: blog.heading,
    slug: blog.slug,
    imageUrl: blog.imageUrl,
    paragraph: blog.paragraph,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog({ ...editedBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedBlog);
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="heading">
                  Blog Title
                </label>
                <input
                  className="form-control"
                  id="heading"
                  name="heading"
                  type="text"
                  value={editedBlog.heading}
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
                  value={editedBlog.imageUrl}
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
                  value={editedBlog.slug}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="paragraph">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="paragraph"
                  name="paragraph"
                  type="text"
                  placeholder="Enter New Message"
                  value={editedBlog.paragraph}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Update Blog
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

export default BlogOperations;
