import React from "react"
import { linksNav } from "../../routes/linksNav"
import { MenuItem } from "../MenuItem"

export function Menu() {

  return (
    <aside className="asidebar-container">
      <img src="" alt="logo" />
      <menu className="menu-container">
        <h4>MENU</h4>
        {linksNav.map((link) => (
          <MenuItem svg={link.svg} key={link.title} to={link.to}>
            {link.title}
          </MenuItem>
        ))}
      </menu>
    </aside>
  )
}
