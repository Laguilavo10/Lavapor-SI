import React, { Children, cloneElement, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Menu } from "../../containers/Menu"
import { useUser } from "../../context/userData"
import { TopBar } from "../../containers/TopBar"

export default function MainLayout({children}) {
  let { userData } = useUser()
  let navigate = useNavigate()

  useEffect(() => {
    if (!userData) {
      navigate("/login")
    }
  }, [userData])

  // let childrenClone = cloneElement(children, {className: 'section-container',})
  return (
    <>
      <main className="main-container">
        <Menu></Menu>
        <TopBar></TopBar>
        <section className="section-container">
          {children}
        </section>
      </main>
    </>
  )
}
