import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const box = [
    {
      id: 1,
      title: "Dashboard",
      link: "/admin-dashboard",
      icon: "bi bi-speedometer2",
    },
    {
      id: 2,
      title: "Blog",
      link: "/blog-operations",
      icon: "bi bi-bookmark",
    },
    {
      id: 3,
      title: "FAQ",
      link: "/faq-operations",
      icon: "bi bi-question-circle",
    },
    {
      id: 4,
      title: "Testimonial",
      link: "/testimonial-operations",
      icon: "bx bx-message",
    },
    {
      id: 5,
      title: "Team",
      link: "/team-operations",
      icon: "bi bi-person-video",
    },
    {
      id: 6,
      title: "Portfolio",
      link: "/portfolio-operations",
      icon: "bi bi-briefcase",
    },
    {
      id: 7,
      title: "Pricing",
      link: "/pricing-operations",
      icon: "bi bi-currency-dollar",
    },
    {
      id: 8,
      title: "User",
      link: "/user-operations",
      icon: "bi bi-person",
    },
    {
      id: 9,
      title: "Form Data",
      link: "/form-data-operations",
      icon: "bi bi-card-text",
    },
    {
      id: 10,
      title: "Subscribers",
      link: "/subscribers",
      icon: "bi bi-people",
    },
    {
      id: 11,
      title: "Statistics",
      link: "/stats",
      icon: "bi bi-bar-chart",
    },
  ];
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "#f2f2f2",
            paddingTop: "25px",
            paddingRight: "30px",
            height: "100%",
            marginLeft: "-15px",
            paddingBottom: "25px",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            {box.map((item) => (
              <li key={item.id} style={{ fontSize: "16px" }} className="my-4">
                <Link
                  className="nav-link scrollto"
                  to={item.link}
                  style={{ color: "#2c2c2c" }}
                >
                  <i className={`${item.icon} mx-2`}></i>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <i className="bi bi-list mobile-nav-toggle aos-init aos-animate"></i>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
