import React from "react";
import "./Activelink.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
        {children}

    </NavLink>
  );
};

export default ActiveLink;
