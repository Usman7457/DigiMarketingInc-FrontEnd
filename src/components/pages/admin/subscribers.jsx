import React, { useEffect, useState } from "react";
import Helmet from "../../layout/helmet";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data } = await axios.get(
<<<<<<< HEAD
        "https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/subscriber/fetch-subscriber"
=======
        "http://localhost:4001/api/subscriber/fetch-subscriber"
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      setSubscribers(data);
      setTotalSubscribers(data.length);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      toast.error("Failed to fetch subscribers");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
<<<<<<< HEAD
        `https://digi-marketing-inc-back-5ps5l19yf.vercel.app/api/subscriber/delete-subscriber/${id}`
=======
        `http://localhost:4001/api/subscriber/delete-subscriber/${id}`
>>>>>>> 5773b34dc1b0b531db7e57a19569c2364395501d
      );
      toast.success("Subscriber deleted");
      fetchSubscribers();
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      toast.error("Failed to delete subscriber");
    }
  };

  const formatDate = (dateString) => {
    const today = new Date(dateString);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    return `${dd}-${mm}-${yyyy} (${hours}:${minutes})`;
  };

  return (
    <>
      <Helmet title="Subscribers">
        <div id="services" className="services mt-5">
          <div className="container">
            <div className="section-title" data-aos="fade-down">
              <span>DMI - Subscribers</span>
              <h2>DMI - Subscribers</h2>
            </div>
            <div className="container">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Subscriber Email</th>
                    <th>Subscription Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <tr key={subscriber._id}>
                      <td>{index + 1}</td>
                      <td>{subscriber.email}</td>
                      <td>{formatDate(subscriber.createdAt)}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(subscriber._id);
                          }}
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total Subscribers: {totalSubscribers}</p>
            </div>
          </div>
        </div>
      </Helmet>
      <ToastContainer />
    </>
  );
};

export default Subscribers;
