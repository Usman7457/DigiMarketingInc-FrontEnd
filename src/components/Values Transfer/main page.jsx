import React from "react";
import Helmet from "../../layout/helmet";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Subscribers = () => {
  const [subscriber, setSubscriber] = useState([]);
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubscriber();
  }, []);

  const fetchSubscriber = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/subscriber/fetch-subscriber"
      );
      setSubscriber(data);
      setTotalSubscribers(data.length);
    } catch (error) {
      console.error("Error fetching Subscriber:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4001/api/subscriber/delete-subscriber/${id}`
      );
      toast.success("Subscriber deleted");
      fetchSubscriber();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed To Delete Subscriber");
    }
  };

  const handleNextPage = () => {
    navigate('/next-page', { state: { totalSubscribers } });
  };

  return (
    <>
      <Helmet title="Subscribers">
        <div id="services" className="services mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
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
                <tbody id="tableBody">
                  {subscriber.map((subscriber, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{subscriber.email}</td>
                      <td>{subscriber.createdAt}</td>
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
              <button onClick={handleNextPage}>Go to Next Page</button>
            </div>
          </div>
        </div>
      </Helmet>
      <ToastContainer />
    </>
  );
};

export default Subscribers;
