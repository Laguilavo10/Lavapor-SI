import { FormGrid } from "../../components/FormGrid"
import { InputForm } from "../../components/InputForm"
import { Tabla } from "../../components/Tabla"
import { headersTablaPrecios } from "../../utils/headersTablas"

export function Precios() {
  return (
    <>
      <h2>Nuevo</h2>
      <FormGrid gridColumns={3}>
        <InputForm name={"Descripcion"} />
        <InputForm name={"Precio"} type={"number"} />
        <button>Crear</button>
      </FormGrid>
      <h2>Precios</h2>
      <Tabla headers={headersTablaPrecios}></Tabla>
    </>
  )
}
