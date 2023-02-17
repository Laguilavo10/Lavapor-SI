import { useState } from "react"
import { AvailableToEdit } from "../../components/AvailableToEdit"
import { GreenRedButtons } from "../../components/GreenRedButtons"

export function RowsTabla({ item }) {
  const [canEdit, setcanEdit] = useState(false)

  const canEditFunction = () => {
    setcanEdit((prev) => !prev)
  }
  return (
    <>
      <AvailableToEdit availableToEdit={canEdit}>{item.id}</AvailableToEdit>
      <AvailableToEdit availableToEdit={canEdit}>{item.descripcion}</AvailableToEdit>
      <AvailableToEdit availableToEdit={canEdit}>{item.precio}</AvailableToEdit>
      <li>
        <GreenRedButtons
          red={"Eliminar"}
          green={canEdit ? "Guardar" : "Editar"}
          actionGreenBtn={canEditFunction}
        />
      </li>
    </>
  )
}
