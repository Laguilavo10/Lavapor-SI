import {  useState } from "react"
import { useUser } from "../../context/userData"
import { closeModal, openModal, useModal } from "../../hooks/useModal"
import {  Modal } from "../Modal"
import { useHandleTheme } from "../../hooks/useHandleTheme" 

export function TopBar() {

  let { userData } = useUser()
  const { isOpen, setIsOpen } = useModal()

  const {darkMode, setDarkMode, changeTheme} = useHandleTheme()

  return (
    <section className="topbar-container">
      <button onClick={changeTheme} className="theme-btn">
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        )}
      </button>

      <div className="topbar-user">
        <img
          src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg"
          alt="user"
        />
        <p>{userData?.name}</p>
        <svg
          onClick={()=>openModal(setIsOpen)}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-dots-vertical"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      </div>
      {isOpen && <Modal close={(event)=>closeModal({event, setIsOpen})} />}
    </section>
  )
}
