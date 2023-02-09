import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { useUser } from "../../context/userData"

export default function MainLayout() {
  let { userData } = useUser()
  let navigate = useNavigate()
  
  useEffect(() => {
    if(!userData){
      navigate('/login')
    }
  }, [userData]);
  

  return (
    <>
      <main className="main-container">
        <Menu></Menu>
        <h1>sds</h1>
      </main>
    </>
  )
}
