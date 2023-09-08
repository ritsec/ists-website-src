import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";
import logo from "../../res/logo512.png";

interface NavProps {
  openSidebar: () => void;
  isSidebarOpen: boolean;
}

const Nav: React.FC<NavProps> = ({ openSidebar, isSidebarOpen }): React.ReactElement => {
  return (
    <nav className="nav">
      <NavLink className="logo-link" to="/">
        <img src={logo} className="logo" alt="RITSEC Lock Logo" />
      </NavLink>
      <div className="links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/resources">
          Resources
        </NavLink>
        <NavLink className="nav-link" to="/register">
          2024
        </NavLink>
        <NavLink className="nav-link" to={{ pathname: "http://eepurl.com/ikeo6z" }} target="_blank">
          Mailing List
        </NavLink>
      </div>
      <div className={`sidebar-toggle ${isSidebarOpen ? "open" : "closed"}`} onClick={openSidebar}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
