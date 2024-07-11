import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }): React.ReactElement => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/resources">
          Resources
        </NavLink>
        <NavLink className="nav-link" to="/register">
          2025
        </NavLink>
        <NavLink className="nav-link" to={{ pathname: "http://eepurl.com/ikeo6z" }} target="_blank">
          Mailing List
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
