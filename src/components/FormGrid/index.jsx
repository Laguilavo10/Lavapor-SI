import { useState } from "react"

export function FormGrid({children, className, submitFunction, referencia }) {
  return (
    <>
      <form action="" className={`form ${className || ''}`} onSubmit={submitFunction} ref={referencia || null}>
        {children}
      </form>
    </>
  )
}
