import React, { Children, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { useUser } from "../../context/userData"
import { TopBar } from "../../components/TopBar"

export default function MainLayout({children}) {
  let { userData } = useUser()
  let navigate = useNavigate()

  useEffect(() => {
    if (!userData) {
      navigate("/login")
    }
  }, [userData])

  return (
    <>
      <main className="main-container">
        <Menu></Menu>
        <TopBar></TopBar>
        {children}
      </main>
    </>
  )
}
