import React from "react";
import logoImg from "../img/umbrella-beach-solid.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="navbar navbar-brand">
        <Link to={"/"} className="header">
          <img src={logoImg} alt="logo" className="logo"></img>
          <h4>API Rick and Morty</h4>
        </Link>
      </div>
    </header>
  );
}
