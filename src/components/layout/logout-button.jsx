import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, deleteToken } from "../../lib/local-storage";

const LogoutButtons = () => {
  const [user, setUser] = useState(getToken());
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteToken();
    setUser(null);
    navigate("/login");
  };
  if (!user) {
    return (
      <Link to="/login">
        <i className="bx bx-user" style={{ fontSize: "28px" }}></i>
      </Link>
    );
  }
  return (
    <>
      <h5 className="text-white d-flex" style={{ marginTop: "3px" }}>
        <Link to="/admin-dashboard">
          {user.existingUser.userName.slice(0, 2).toUpperCase()}
        </Link>
        <button
          onClick={handleLogout}
          className="btn btn-link text-white"
          style={{ marginTop: "2px" }}
        >
          <i className="bi bi-box-arrow-right" style={{ fontSize: "28px" }}></i>
        </button>
      </h5>
    </>
  );
};

export default LogoutButtons;
