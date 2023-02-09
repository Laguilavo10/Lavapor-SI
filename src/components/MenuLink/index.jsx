import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

export function MenuLink({ children, svg, to }) {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(location.pathname === to)
  }, [location, to])

  return (
    <>
      <NavLink className={`menu-link ${isActive ? "menu-onpage" : ""}`} to={to}>
        {svg}
        {children}
      </NavLink>
    </>
  )
}
