import React from "react"
import { InputForm } from "../../components/InputForm"

export function Clientes() {
  let countInputs = [
    { name: "Cedula de ciudadanía" },
    { name: "Nombre" },
    { name: "Apellido" },
    { name: "Direccion" },
    { name: "Email" },
    { name: "Telefono" },
  ]

  return (
    <>
      <h1>Registro</h1>
      <form className="form">
        {countInputs.map((i) => (
          <InputForm name={i.name} />
        ))}
        <button className="form-button">hola</button>
      </form>
    </>
  )
}
