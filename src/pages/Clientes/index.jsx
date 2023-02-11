import React from "react"
import { useNavigate } from "react-router-dom"
import { Busqueda } from "../../components/Busqueda"
import { RegistroForm } from "../../components/RegistroForm"
import { Tabla } from "../../components/Tabla"
import { InputsClientes } from "../../utils/data"

export function Clientes() {
  
  const navigate = useNavigate()
  // const Inputs = [
  //   { name: "Cedula de ciudadanía" },
  //   { name: "Nombre" },
  //   { name: "Apellido" },
  //   { name: "Direccion" },
  //   { name: "Email" },
  //   { name: "Telefono" },
  // ]

  const headersTablaClientes = [
    "ID",
    "Nombre",
    "Telefono",
    "Direccion",
    "Editar",
  ]

  const dataTablaClientes = [
    {
      CC: 1034776329,
      Nombre: "Andres Laguilavo",
      Telefono: 3214613258,
      Direccion: "Madelena",
    },
    {
      CC: 1234567,
      Nombre: "Bibis Ruiz",
      Telefono: 987654321,
      Direccion: "Suba",
    },
  ]

  let dataInArray = dataTablaClientes.map((a) => Object.values(a))

  const edithUser = (data)=>{
    let infoUserInObject = dataTablaClientes.find((a)=>a['CC'] === data[0])
    navigate(`/cliente?usuario=${infoUserInObject['CC']}`, {state: infoUserInObject})
  } 

  return (
    <>
      <RegistroForm countInputs={InputsClientes } />
      <Busqueda />
      <Tabla headers={headersTablaClientes}>
        {/* Lo que hay aqui no se ni como lo hice, no tocar */}
        {dataInArray.map((dataUser, index) => (
          <React.Fragment key={index}>
            {dataUser.map((itemData, index) => (
              <li key={index}>{itemData}</li>
            ))}
            <svg
              onClick={()=>edithUser(dataUser)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </React.Fragment>
        ))}
      </Tabla>
    </>
  )
}
