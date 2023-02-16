import React, { useState } from "react"
import { AvailableToEdit } from "../../components/AvailableToEdit"
import { FormGrid } from "../../components/FormGrid"
import { InputForm } from "../../components/InputForm"
import { Tabla } from "../../components/Tabla"
import { headersTablaPrecios } from "../../utils/headersTablas"
import { RowsTabla } from "../../containers/RowsTabla"

export function Precios() {
  const dataPrecios = [
    { descripcion: "camisa", precio: "2000" },
    { descripcion: "camisa", precio: "2000" },
    { descripcion: "camisa", precio: "2000" },
    { descripcion: "camisa", precio: "2000" },
    { descripcion: "camisa", precio: "2000" },
  ]
  return (
    <>
      <h2>Nuevo</h2>
      <FormGrid
        gridColumns={3}
        customStyles={{ gridTemplateColumns: "37% 37% 20%" }}
      >
        <InputForm name={"Descripcion"} />
        <InputForm name={"Precio"} type={"number"} />
        <button className="form-button">Crear</button>
      </FormGrid>
      <h2>Precios</h2>
      <Tabla headers={headersTablaPrecios}>
        {dataPrecios.map((item) => (
          <RowsTabla item={item} />
        ))}
      </Tabla>
    </>
  )
}
