import React from "react"
import { InputForm } from "../../components/InputForm"
import { FormGrid } from "../FormGrid"

export function RegistroForm({countInputs}) {
  return (
    <>
      <h1>Registro</h1>
      <FormGrid gridColumns={3}>
        {countInputs.map((i) => (
          <InputForm name={i.name} key={i.name} />
        ))}
        <button className="form-button">Registrar</button>
      </FormGrid>
    </>
  )
}
