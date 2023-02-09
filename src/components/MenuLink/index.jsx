import React from "react";

export function MenuLink({children, svg}) {
  return (
    <>
      <li className="menu-link">
        {svg}
        <a href="">{children}</a>
      </li>
    </>
  );
}
