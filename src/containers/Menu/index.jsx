import React from "react"
import { linksNav } from "../../routes/linksNav"
import { MenuItem } from "../../components/MenuItem"
import logo from '../../assets/Logo.png'

export function Menu() {

  return (
    <aside className="asidebar-container">
      <img src={logo} alt="logo-lavapor" />
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
