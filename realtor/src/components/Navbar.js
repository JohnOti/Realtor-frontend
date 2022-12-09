import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1 className="success">REALTOR</h1>
        <div className="navlink-bar">
          <NavLink className="routes_nav" to="home">
            Home
          </NavLink>
          <NavLink className="routes_nav" to="login">
            LogIn
          </NavLink>
          <NavLink className="routes_nav" to="signup">
            SignUp
          </NavLink>
          <NavLink className="routes_nav" to="about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}
