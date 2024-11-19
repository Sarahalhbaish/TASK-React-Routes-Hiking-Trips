import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/"
          style={({ isActive }) => {
            return {
              textDecorationLine: isActive ? "underline" : "none",
            };
          }}
        >
          Hike
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/"
                style={({ isActive }) => {
                  return {
                    textDecorationLine: isActive ? "underline" : "none",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/TheList"
                style={({ isActive }) => {
                  return {
                    textDecorationLine: isActive ? "underline" : "none",
                  };
                }}
              >
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
