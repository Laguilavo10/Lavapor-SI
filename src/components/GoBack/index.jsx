import React from "react"
import { useNavigate } from "react-router-dom"

export function GoBack() {
  let navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pointer"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke="#2c3e50"
        fill="none"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>
    </div>
  )
}
