import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/NavbarStyle.css";

export default function Navbar() {
  const getNavLinkClassName = ({ isActive }) => (isActive ? "active" : "");

  return (
    <div className="container-navbar">
      <NavLink
        exact
        activeClassName="active"
        className={getNavLinkClassName}
        to="/"
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        activeClassName="active"
        className={getNavLinkClassName}
        to="/Pokemon"
      >
        <span>Pokémon</span>
      </NavLink>
    </div>
  );
}
