import React from "react"
import { Busqueda } from "../../components/Busqueda"
import { RegistroForm } from "../../components/RegistroForm"

export function Clientes() {
  const Inputs = [
    { name: "Cedula de ciudadanía" },
    { name: "Nombre" },
    { name: "Apellido" },
    { name: "Direccion" },
    { name: "Email" },
    { name: "Telefono" },
  ]

  return (
    <>
      <RegistroForm countInputs={Inputs} />
      <Busqueda />
    </>
  )
}
