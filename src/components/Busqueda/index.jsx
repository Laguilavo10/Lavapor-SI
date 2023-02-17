import React from "react"
import { SVG } from "../../svg/collectionSVG"

export function Busqueda() {
  return (
    <>
      <section className="search-section">
        <form className="search-container">
          {SVG['search']}
          <input type="search" placeholder="Search..." />
        </form>
      </section>
    </>
  )
}
