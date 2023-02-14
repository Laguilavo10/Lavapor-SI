import { useState } from "react"

export function GreenRedButtons({actionGreenBtn, actionRedBtn, green, red}) {
  return (
    <>
      <div className="btns-container">
        <button className="btn-green" onClick={actionGreenBtn}>
          {green}
        </button>
        <button className="btn-red" onClick={actionRedBtn}>
          {red}
        </button>
      </div>
    </>
  )
}
