import React from "react";
import Helmet from "../../layout/helmet";
import { Formik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserOperations = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [totalUser, setTotalUser] = useState(0);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/users/fetch-users"
      );
      setUsers(data);
      setTotalUser(data.length);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values 12:", values);
      await axios.post(
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/users/register",
        values
      );
      toast.success("Registered successfully!");
      fetchUsers();
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

  const handleDelete = async (id) => {
    try {
      const user = users.find((user) => user._id === id);
      if (!user) {
        toast.error("User not found");
        return;
      }

      const userName = user.userName;
      if (userName === "Sheikh Muhammad Usman Ghani") {
        toast.error("You can't delete yourself");
        return;
      }

      await axios.delete(
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/users/delete-user/${id}`
      );
      toast.success("User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to delete User");
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const handleSubmitEdit = async (editedUserData) => {
    try {
      const { userName, email, password } = editedUserData;
      await axios.patch(
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/users/update-user/${editingUser._id}`,
        {
          userName,
          email,
          password,
        }
      );
      toast.success("User edited successfully");
      fetchUsers();
      setEditingUser(null);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to edit User");
    }
  };

  return (
    <>
      <Helmet title="User Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>User Operations</span>
              <h2>User Operations</h2>
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
                      userName: "",
                      email: "",
                      password: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.userName) {
                        errors.userName = "Name Required";
                      }
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
                              name="userName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.userName}
                              className="form-control"
                              placeholder="Enter Name"
                            />
                            <p className="text-danger">
                              {errors.userName &&
                                touched.userName &&
                                errors.userName}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className="form-control"
                              placeholder="Enter Email"
                            />
                            <p className="text-danger">
                              {errors.email && touched.email && errors.email}
                            </p>
                          </div>
                          <div className="col-md-4 form-group">
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              className="form-control"
                              placeholder="Enter Password"
                            />
                            <p className="text-danger">
                              {errors.password &&
                                touched.password &&
                                errors.password}
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
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          disabled={
                            user.userName === "Sheikh Muhammad Usman Ghani"
                          }
                          onClick={() => handleEdit(user)}
                        >
                          <i className="bx bx-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          disabled={
                            user.userName === "Sheikh Muhammad Usman Ghani"
                          }
                          onClick={() => {
                            handleDelete(user._id);
                          }}
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Users: {totalUser}</p>
            </div>
          </div>
        </div>

        {editingUser && (
          <EditUserModal
            user={editingUser}
            onCancel={handleCancelEdit}
            onSubmit={handleSubmitEdit}
          />
        )}
      </Helmet>
      <ToastContainer />
    </>
  );
};

const EditUserModal = ({ user, onCancel, onSubmit }) => {
  const [editedUser, setEditedUser] = useState({
    userName: user.userName,
    email: user.email,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedUser);
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="userName">
                  User Name
                </label>
                <input
                  className="form-control"
                  id="userName"
                  name="userName"
                  type="text"
                  value={editedUser.userName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="email"
                  value={editedUser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter New Password"
                  value={editedUser.password}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Update User
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

export default UserOperations;
