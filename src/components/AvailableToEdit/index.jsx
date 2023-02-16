import { useState } from "react"
import { InputForm } from "../InputForm"

export function AvailableToEdit({ children, availableToEdit = false }) {
  return (
    <>
      {!availableToEdit ? <p>{children}</p> : <InputForm valueInput={children} />}
    </>
  )
}
