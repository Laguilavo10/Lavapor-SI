import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormGrid } from "../../components/FormGrid"
import { InputForm } from "../../components/InputForm"
import { InputsClientes } from "../../utils/data"

export function ClienteData() {
  let { state } = useLocation()
  let navigate = useNavigate()

  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <>
      <div onClick={goBack}>atras</div>
      <h1>{state[1]}</h1>
      <h4>{state[0]}</h4>

      <FormGrid gridColumns={2} >
        {InputsClientes.map((data) => (
          <InputForm name={data.name} />
        ))}

      </FormGrid>
    </>
  )
}
