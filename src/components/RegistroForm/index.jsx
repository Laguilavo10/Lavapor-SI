import React from "react"
import { InputForm } from "../../components/InputForm"
import { FormGrid } from "../FormGrid"

export function RegistroForm({countInputs}) {
  return (
    <>
      <h2>Registro</h2>
      <FormGrid gridColumns={3}>
        {countInputs.map((i) => (
          <InputForm name={i.name} key={i.name} />
        ))}
        <button className="form-button">Registrar</button>
      </FormGrid>
    </>
  )
}
