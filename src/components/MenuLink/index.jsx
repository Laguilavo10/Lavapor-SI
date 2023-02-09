import React from "react";
import { NavLink } from "react-router-dom";

export function MenuLink({children, svg, to}) {
  return (
    <>
      <li className="menu-link">
        {svg}
        <NavLink to={to}>{children}</NavLink>
      </li>
    </>
  );
}
