import React from "react"
import { InputForm } from "../../components/InputForm"

export function RegistroForm({countInputs}) {
  return (
    <>
      <h1>Registro</h1>
      <form className="form">
        {countInputs.map((i) => (
          <InputForm name={i.name} key={i.name} />
        ))}
        <button className="form-button">Registrar</button>
      </form>
    </>
  )
}
