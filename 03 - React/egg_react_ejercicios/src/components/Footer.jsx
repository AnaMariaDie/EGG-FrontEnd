import "../App.css";
import React from "react";
import hoja from "../assets/hoja.png";

export const Footer = () => {
  const year = new Date().getFullYear();
  const compName = "Organicos y mas";

  return (
    <div className="container-fluid" id="footer">
      <footer className="d-flex; justify-content-evenly; align-items-center;  border-top">
        <h5 className="col-md-4; mb-0">
          &copy; {year} {compName}
          <img
            className="logo, col-md-4; mb-0"
            height="20" width="30"
            src={ hoja }
            alt=""
          />
        </h5>
      </footer>
    </div>
  );
};

export default Footer;