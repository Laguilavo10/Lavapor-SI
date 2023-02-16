import React from "react"
import { InputForm } from "../../components/InputForm"
import { FormGrid } from "../../components/FormGrid"

export function RegistroClientes({countInputs}) {
  return (
    <>
      <h2>Registro</h2>
      <FormGrid gridColumns={3}>
        {countInputs.map((i) => (
          <InputForm name={i.name} key={i.name} />
        ))}
        <button className="button-submit btn-registro--clientes">Registrar</button>
      </FormGrid>
    </>
  )
}
