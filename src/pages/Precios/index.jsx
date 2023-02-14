import React from "react"
import { AvailableToEdit } from "../../components/AvailableToEdit"
import { FormGrid } from "../../components/FormGrid"
import { InputForm } from "../../components/InputForm"
import { Tabla } from "../../components/Tabla"
import { GreenRedButtons } from "../../components/GreenRedButtons"
import { headersTablaPrecios } from "../../utils/headersTablas"

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
      <FormGrid gridColumns={3}>
        <InputForm name={"Descripcion"} />
        <InputForm name={"Precio"} type={"number"} />
        <button>Crear</button>
      </FormGrid>
      <h2>Precios</h2>
      <Tabla headers={headersTablaPrecios}>
        {dataPrecios.map((item) => (
          <React.Fragment>
            <AvailableToEdit>{item.descripcion}</AvailableToEdit>
            <AvailableToEdit>{item.precio}</AvailableToEdit>
            <GreenRedButtons red={'eliminar'} green={'editar'}/>
          </React.Fragment>
        ))}
      </Tabla>
    </>
  )
}
