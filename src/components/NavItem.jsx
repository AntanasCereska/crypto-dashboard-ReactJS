import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, title, showNav }) => {
  return (
    <div onClick={showNav}>
      <NavLink exact to={link} className="nav-item" activeClassName="is-active">
        {title}
      </NavLink>
    </div>
  );
};

export default NavItem;
