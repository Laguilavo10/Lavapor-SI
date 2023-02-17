import { useState } from "react"
import { GoBack } from "../../components/GoBack"
import { Tabla } from "../../components/Tabla"
import { headersTablaVenta } from "../../utils/headersTablas"

export function FacturaData({ data }) {
  let { id, valor, estado, cliente, fecha } = data
  return (
    <>
      <GoBack />
      <h2>Factura #{id}</h2>
      <p>Cliente: {cliente}</p>

      <Tabla headers={headersTablaVenta} className={"tabla-venta"}>
      <h1>dasd</h1>
      </Tabla>
      
    </>
  )
}
