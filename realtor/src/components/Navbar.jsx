import React from "react";

import { Link } from "react-router-dom";

import Logo from './img/rightmove.svg'

const NavBar = () => { 
    return (
      <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}

          <Link to="/">
            <img src={Logo} alt="Rightmove Logo" />
          </Link>

          {/* buttons */}
          <div className="flex items-center">
            <Link className="hover:text-violet-900 transition" to="">
              Log out
            </Link>
            <Link
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              to="/register"
            >
              Sign In
            </Link>

            <Link className="hover:text-violet-900 transition" to="/login">
              Log out
            </Link>
          </div>
        </div>
      </header>
    );
 }

export default NavBar;