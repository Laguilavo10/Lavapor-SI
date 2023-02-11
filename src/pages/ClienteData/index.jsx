import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormGrid } from "../../components/FormGrid"
import { InputForm } from "../../components/InputForm"
import { InputsClientes } from "../../utils/data"

export function ClienteData() {
  const [isDisabled, setIsDisabled] = useState(true);
  
  let { state } = useLocation()
  let { CC, Nombre } = state

  let navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }


  let inputsWithValues = []
  for (const key in state) {
    inputsWithValues.push(
      <InputForm name={key} valueInput={state[key]} isDisabled={isDisabled} key={state[key]}/>
    )
  }
  
  return (
    <>
      <div onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke="#2c3e50"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="11" y2="18" />
          <line x1="5" y1="12" x2="11" y2="6" />
        </svg>
      </div>
      <h1>{Nombre}</h1>
      <h4>{CC}</h4>

      <FormGrid gridColumns={2}>{[...inputsWithValues]}</FormGrid>
    </>
  )
}
