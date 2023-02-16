import { useState } from "react"

export function FormGrid({children, gridColumns, className, submitFunction, referencia, customStyles = '' }) {

  let styles = {
    width: '100%',
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    ...customStyles
  };

  return (
    <>
      <form style={styles} className={`form ${className || ''}`} onSubmit={submitFunction} ref={referencia || null}>
        {children}
      </form>
    </>
  )
}
