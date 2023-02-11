import { useState } from "react"

export function FormGrid({ gridColumns = 3, children, customStyles }) {
  const defaultStyles = {
    display: "grid",
    gridTemplateColumns: `repeat( ${gridColumns}, 1fr)`,
    gap: '20px',
    margin: '20px 0',
  }

  return (
    <>
      <form action="" style={customStyles || defaultStyles}>
        {children}
      </form>
    </>
  )
}
