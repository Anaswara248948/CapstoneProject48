import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-dark">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Books">
            Books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">
            About
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">
            Login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Register">
            Register
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Addbook">
            Add Books
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Deletebook">
            Delete Books
          </NavLink>
        </li>
        

      </ul>
    </nav>
  );
};

export default Navbar;
