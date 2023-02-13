import React from "react"

export function Tabla({ headers, children, className }) {
  return (
    <article className={`tabla-container ${className}`}>
      <ul
        className="tabla-header"
        style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
      >
        {headers.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
      <ul
        className="tabla-data"
        style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
      >
        {children}
      </ul>
    </article>
  )
}
