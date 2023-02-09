import React from "react"
import { linksNav } from "../../utils/linksNav"
import { MenuLink } from "../MenuLink"

export function Menu() {

  return (
    <aside className="asidebar-container">
      <img src="" alt="logo" />
      <menu className="menu-container">
        <h4>MENU</h4>
        {linksNav.map((link) => (
          <MenuLink svg={link.svg}>{link.title}</MenuLink>
        ))}
      </menu>
    </aside>
  )
}
