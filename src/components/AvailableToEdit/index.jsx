import { useState } from "react"
import { InputForm } from "../InputForm"

export function AvailableToEdit({ children, availableToEdit = false }) {
  return (
    <>
      {!availableToEdit ? <li>{children}</li> : <InputForm valueInput={children} />}
    </>
  )
}
