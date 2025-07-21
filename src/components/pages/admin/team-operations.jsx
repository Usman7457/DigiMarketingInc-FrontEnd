import React from "react";
import { Formik } from "formik";
import Helmet from "../../layout/helmet";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const TeamOperations = () => {
  const [team, setTeam] = useState([]);
  const [editingTeam, setEditingTeam] = useState(null);
  const [totalTeams, setTotalTeams] = useState(0);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const { data } = await axios.get(
        "https://digi-marketing-inc-back-end.vercel.app/api/team/fetch-team"
      );
      setTeam(data);
      setTotalTeams(data.length);
    } catch (error) {
      console.error("Error fetching Team Members:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values 12:", values);
      await axios.post(
        "https://digi-marketing-inc-back-end.vercel.app/api/team/add-team",
        values
      );
      toast.success("Team Member Added!");
      fetchTeam();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed Adding Team Member");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://digi-marketing-inc-back-end.vercel.app/api/team/delete-team/${id}`
      );
      toast.success("Team Member deleted");
      fetchTeam();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete Team Member");
    }
  };

  const handleEdit = (team) => {
    setEditingTeam(team);
  };

  const handleCancelEdit = () => {
    setEditingTeam(null);
  };

  const handleSubmitEdit = async (editedTeamData) => {
    try {
      const { name, imageUrl, role } = editedTeamData;
      await axios.patch(
        `https://digi-marketing-inc-back-end.vercel.app/api/team/update-team/${editingTeam._id}`,
        {
          name,
          imageUrl,
          role,
        }
      );
      toast.success("Team edited successfully");
      fetchTeam();
      setEditingTeam(null);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to edit Team");
    }
  };

  return (
    <>
      <Helmet title="Team Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Team Operations</span>
              <h2>Team Operations</h2>
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
                      imageUrl: "",
                      role: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.name) {
                        errors.name = "Employee Name Required";
                      }
                      if (!values.imageUrl) {
                        errors.imageUrl = "Image Url Required";
                      }
                      if (!values.role) {
                        errors.role = "Employee Role Required";
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
                              placeholder="Enter Employee Full Name"
                            />
                            <p className="text-danger">
                              {errors.name && touched.name && errors.name}
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
                              name="role"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.role}
                              className="form-control"
                              placeholder="Enter Employee Role"
                            />
                            <p className="text-danger">
                              {errors.role && touched.role && errors.role}
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
                    <th>Member Image</th>
                    <th>Member Name</th>
                    <th>Member Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {team.map((team, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={team.imageUrl}
                          alt="team"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{team.name}</td>
                      <td>{team.role}</td>
                      <td>
                        <button onClick={() => handleEdit(team)}>
                          <i className="bx bx-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(team._id);
                          }}
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Team Members: {totalTeams}</p>
            </div>
          </div>
        </div>

        {editingTeam && (
          <EditTeamModal
            team={editingTeam}
            onCancel={handleCancelEdit}
            onSubmit={handleSubmitEdit}
          />
        )}
      </Helmet>
      <ToastContainer />
    </>
  );
};

const EditTeamModal = ({ team, onCancel, onSubmit }) => {
  const [editedTeam, setEditedTeam] = useState({
    name: team.name,
    role: team.role,
    imageUrl: team.imageUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTeam({ ...editedTeam, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedTeam);
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="name">
                  Team Member Nmae
                </label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  value={editedTeam.name}
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
                  value={editedTeam.imageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="col-form-label" htmlFor="role">
                  Role
                </label>
                <input
                  className="form-control"
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Enter New role"
                  value={editedTeam.role}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Update Team
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

export default TeamOperations;
