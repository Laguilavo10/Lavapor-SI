import { useState } from "react"

export function FormGrid({children, gridColumns, className, submitFunction, referencia }) {

  let styles = {
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
  };

  return (
    <>
      <form style={styles} className={`form ${className || ''}`} onSubmit={submitFunction} ref={referencia || null}>
        {children}
      </form>
    </>
  )
}
