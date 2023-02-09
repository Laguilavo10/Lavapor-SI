import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { useUser } from "../../context/userData"
import { TopBar } from "../../components/TopBar"
export default function MainLayout() {
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
        <h1>sdasd</h1>
      </main>
    </>
  )
}
