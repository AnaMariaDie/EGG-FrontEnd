import React from "react";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <header className="container-row" id="nav">
        <Link to="/"><img className="logo" height="100" src={ logo } alt="logo" /></Link>
        <div className="justify-content-end">
          <Link to="/comp1" className="logo col-4"><button className="btn btn-outline-warning opacity-50 shadow-lg mt-6 col-auto">Componente 1</button></Link>
          <Link to="/comp2" className="logo col-4"><button className="btn btn-outline-info opacity-50 shadow-lg mt-6 col-auto">Componente 2</button></Link>
        </div>
      </header>
    </>
  )
}

export default Navbar;