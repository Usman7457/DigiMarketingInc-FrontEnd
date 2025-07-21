import React from "react";
import Helmet from "../../layout/helmet";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const FormDataOperations = () => {
  const [contactForm, setContactForm] = useState([]);
  const [totalFormData, setTotalFormData] = useState(0);

  useEffect(() => {
    fetchContactForm();
  }, []);

  const fetchContactForm = async () => {
    try {
      const { data } = await axios.get(
<<<<<<< HEAD
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/contact-form/fetch-contact-form"
=======
        "http://localhost:4001/api/contact-form/fetch-contact-form"
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      setContactForm(data);
      setTotalFormData(data.length);
    } catch (error) {
      console.error("Error fetching Contact Form:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
<<<<<<< HEAD
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/contact-form/delete-contact-form/${id}`
=======
        `http://localhost:4001/api/contact-form/delete-contact-form/${id}`
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      toast.success("Data deleted");
      fetchContactForm();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete Data");
    }
  };
  return (
    <>
      <Helmet title="Form Data Operations">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Form Data Operations</span>
              <h2>Form Data Operations</h2>
            </div>
            <div className="container">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {contactForm.map((contactForm, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{contactForm.name}</td>
                      <td>{contactForm.email}</td>
                      <td>{contactForm.phone}</td>
                      <td>{contactForm.message}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(contactForm._id);
                          }}
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Forms Data: {totalFormData}</p>
            </div>
          </div>
        </div>
      </Helmet>
      <ToastContainer />
    </>
  );
};

export default FormDataOperations;
