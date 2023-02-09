import React from "react"
import { useUser } from "../../context/userData"
import { linksNav } from "../../utils/linksNav"
import { MenuLink } from "../MenuLink"

export function Menu() {
  
  let { userData } = useUser()

  return (
    <aside className="asidebar-container">
      <img src="" alt="logo" />
      <menu className="menu-container">
        <h4>MENU</h4>
        {linksNav.map((link) => (
          <MenuLink svg={link.svg} key={link.title}>
            {link.title}
          </MenuLink>
        ))}
      </menu>
      <div className="menu-user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-dots-vertical"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="2"
          // stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
        <img
          src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg"
          alt="user"
        />
        <p>{userData?.name}</p>
      </div>
    </aside>
  )
}
