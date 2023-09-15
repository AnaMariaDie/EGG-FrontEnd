import React from "react";
import logoImg from "../img/umbrella-beach-solid.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="row">
      <Link to={"/"} className="footer">
        <img src={logoImg} alt="logo" className="logo"></img>
        &copy; AMDCompany {new Date().getFullYear()}
      </Link>
    </footer>
  );
}
