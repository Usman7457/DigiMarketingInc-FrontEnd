import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminFooter from "./admin-footer";
import AdminSidebar from "./admin-sidebar";
import Header from "./header";
import { getToken } from "../../lib/local-storage";

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/login");
    } else {
      setUser(token);
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <div id="main" className="d-flex">
        <AdminSidebar />
        <div className="flex-grow-1">
          <Outlet />
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
