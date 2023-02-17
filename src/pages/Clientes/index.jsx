import React from "react"
import { useNavigate } from "react-router-dom"
import { Busqueda } from "../../components/Busqueda"
import { RegistroClientes } from "../../containers/RegistroClientes"
import { Tabla } from "../../components/Tabla"
import { dataTablaClientes, InputsClientes } from "../../utils/data"
import { headersTablaClientes } from "../../utils/headersTablas"
import { SVG } from "../../svg/collectionSVG"

export function Clientes() {
  const navigate = useNavigate()

  let dataInArray = dataTablaClientes.map((a) => Object.values(a))

  const redirectMoreInfoUser = (data) => {
    let infoUserInObject = dataTablaClientes.find((a) => a["CC"] === data[0])
    navigate(`/cliente?usuario=${infoUserInObject["CC"]}`, {
      state: infoUserInObject,
    })
  }

  return (
    <>
      <RegistroClientes countInputs={InputsClientes} />
      <h2>Busqueda</h2>
      <Busqueda />
      <Tabla headers={headersTablaClientes}>
        {/* Lo que hay aqui no se ni como lo hice, no tocar */}
        {dataInArray.map((dataUser, index) => (
          <React.Fragment key={index}>
            {dataUser.map((itemData, index) => (
              <li key={index}>{itemData}</li>
            ))}
            <li onClick={() => redirectMoreInfoUser(dataUser)}>
              {SVG["edit"]}
            </li>
          </React.Fragment>
        ))}
      </Tabla>
    </>
  )
}
