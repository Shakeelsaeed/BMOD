import React from "react";
import { NavLink } from "react-router-dom";

function GigDashboard(props) {
  return (
    <div className="gigs">
      <ul
        className="flex menu"
        style={{ textDecoration: "none", listStyle: "none", color: "white" }}
      >
        <li className="menu-link">
          <NavLink className="nav-link" to="/profile/active">Active</NavLink>
        </li>
        <li className="menu-link">
          <NavLink className="nav-link" to="/profile/pending">Pending Review</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default GigDashboard;
