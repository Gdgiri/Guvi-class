import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  return (
    <>
      <nav>
        
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/products" activeClassName="active">
          Products
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
