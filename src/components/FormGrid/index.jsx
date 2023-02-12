import { useState } from "react"

export function FormGrid({ gridColumns = 3, children, customStyles, submitFunction, referencia }) {
  const defaultStyles = {
    display: "grid",
    gridTemplateColumns: `repeat( ${gridColumns}, 1fr)`,
    gap: '20px',
    margin: '20px 0',
  }
  //el form no recibe button debe de ser creado desde el componente padre como children
  return (
    <>
      <form action="" style={customStyles || defaultStyles} onSubmit={submitFunction} ref={referencia || null}>
        {children}
      </form>
    </>
  )
}
