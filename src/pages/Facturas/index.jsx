import { useState } from "react"
import { Busqueda } from "../../components/Busqueda"
import { ItemFactura } from "../../components/ItemFactura"

export function Facturas() {
  let facturas = Array(9).fill(null)
  return (
    <>
      <h2>Facturas</h2>
      <Busqueda />
      <section className="facturas-container">
        {facturas.map((_,i) => (
          <ItemFactura key={i}></ItemFactura>
        ))}
      </section>
    </>
  )
}
