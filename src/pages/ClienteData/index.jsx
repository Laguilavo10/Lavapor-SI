import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormGrid } from "../../components/FormGrid"
import { GoBack } from "../../components/GoBack"
import { InputForm } from "../../components/InputForm"

export function ClienteData() {
  const [isDisabled, setIsDisabled] = useState(true)
  const dataClientReference = useRef(null)

  let { state } = useLocation()
  let { CC, Nombre } = state

  let inputsWithValues = []
  for (const key in state) {
    inputsWithValues.push(
      <InputForm
        name={key}
        valueInput={state[key]}
        isDisabled={isDisabled}
        key={state[key]}
      />
    )
  }

  //! pausado desarrollo mientras aprendo backend
  // const editarCliente = (event) => {
  //   event.preventDefault()
  //   setIsDisabled(false)
  // }

  // const guardarCliente = ()=>{
  //   let datainObject = {
  //     CC: dataClientReference.current[0].value,
  //     Nombre: dataClientReference.current[1].value,
  //     Telefono: dataClientReference.current[2].value,
  //     Direccion: dataClientReference.current[3].value,
  //   }
  // }

  // const eliminarCliente = ()=>{
  //   let cedulaClienteAEliminar = dataClientReference.current[0].value
  //   const indexClienteAEliminar = 
  // }

  return (
    <>
      <GoBack/>
      <h2>{Nombre}</h2>
      <h4>{CC}</h4>
      <FormGrid gridColumns={2} referencia={dataClientReference}>
        {[...inputsWithValues]}
        {/* <button onClick={editarCliente}>Editar</button> */}
        {/* <button onClick={editarCliente}>Eliminar</button> */}
      </FormGrid>
    </>
  )
}
