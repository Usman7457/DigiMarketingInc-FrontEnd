import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../layout/helmet";

const AdminDashboard = () => {
  const box = [
    {
      id: 1,
      imageUrl: "assets/img//admin/blog.jpg",
      buttonUrl: "/blog-operations",
    },
    {
      id: 2,
      imageUrl: "assets/img//admin/faq.jpg",
      buttonUrl: "/faq-operations",
    },
    {
      id: 3,
      imageUrl: "assets/img//admin/testimonial.jpg",
      buttonUrl: "/testimonial-operations",
    },
    {
      id: 4,
      imageUrl: "assets/img//admin/team.jpg",
      buttonUrl: "/team-operations",
    },
    {
      id: 5,
      imageUrl: "assets/img//admin/portfolio.jpg",
      buttonUrl: "/portfolio-operations",
    },
    {
      id: 6,
      imageUrl: "assets/img//admin/pricing.jpg",
      buttonUrl: "/pricing-operations",
    },
    {
      id: 7,
      imageUrl: "assets/img//admin/user.jpg",
      buttonUrl: "/User-operations",
    },
    {
      id: 8,
      imageUrl: "assets/img//admin/form-data.jpg",
      buttonUrl: "/form-data-operations",
    },
    {
      id: 9,
      imageUrl: "assets/img//admin/subscriber.jpg",
      buttonUrl: "/subscribers",
    },
    {
      id: 10,
      imageUrl: "assets/img//admin/statistics.jpg",
      buttonUrl: "/stats",
    },
  ];
  return (
    <>
      <Helmet title="Dashboard">
        <div className="container my-2"></div>
        <div id="contact" className="contact my-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Admin Dashboard</span>
              <h2>Admin Dashboard</h2>
            </div>

            <div id="features" className="features">
              <div className="container" style={{ marginTop: "-10px" }}>
                <div className="row">
                  {box.map((item, index) => (
                    <div className="col-lg-3 mb-4" key={index}>
                      <div className="card">
                        <Link to={item.buttonUrl}>
                          <img
                            src={item.imageUrl}
                            className="card-img-top"
                            alt="..."
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default AdminDashboard;
