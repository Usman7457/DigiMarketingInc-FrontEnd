import React from "react";

const AdminFooter = () => {
  return (
    <>
      <div id="footer">
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyrights 2024 -{" "}
            <strong>
              <span>Digi Marketing Inc</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by -{" "}
            <a
              href="https://sh-m-usman-ghani.web.app/"
              style={{ color: "#4eb478" }}
            >
              Sheikh Muhammad Usman Ghani
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFooter;
