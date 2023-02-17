import { useState } from "react"
import { GoBack } from "../../components/GoBack"

export function FacturaData({ data }) {
  let { id, valor, estado, cliente, fecha } = data
  return (
    <>
      <GoBack />
      <h2>Factura #{id}</h2>
      <p>Cliente: {cliente}</p>

      

      {/* <div className="factura">
        <div className="factura-encabezado">
          <div className="factura-titulo">Factura #{id}</div>
          <div className="factura-fecha">{fecha}</div>
        </div>
        <div className="factura-detalles">
          <div className="factura-cliente">{cliente}</div>
          <div className="factura-valor">${valor}</div>
          <div className={`factura-estado ${estado.toLowerCase()}`}>
            {estado}
          </div>
        </div>
      </div> */}
      
    </>
  )
}
