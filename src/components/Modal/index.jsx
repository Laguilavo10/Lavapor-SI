import React from "react"
import { NavLink } from "react-router-dom"
import { useUser } from "../../context/userData"


export function Modal({close}) {
  let { setUserData } = useUser()

  const closeSession = () => {
    setUserData(null)
  }

  return (
    <>
        <article className="modal" onClick={close}>
          <div>
            <NavLink to="/user" onClick={close}>User</NavLink>
            <NavLink to="/login" onClick={closeSession}>LogOut</NavLink>
          </div>
        </article>
    </>
  )
}
