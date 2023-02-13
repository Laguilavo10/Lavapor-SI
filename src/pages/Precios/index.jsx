import { FormGrid } from "../../components/FormGrid"
import { InputForm } from "../../components/InputForm"
import { Tabla } from "../../components/Tabla"
import { headersTablaPrecios } from "../../utils/headersTablas"

export function Precios() {
  return (
    <>
      <h1>Nuevo</h1>
      <FormGrid
        gridColumns={3}
        customStyles={{ gridTemplateColumns: "1fr 1fr 10%" }}
      >
        <InputForm name={"Descripcion"} />
        <InputForm name={"Precio"} type={"number"} />
        <button>Crear</button>
      </FormGrid>
      
      <h1>Precios</h1>
      <Tabla headers={headersTablaPrecios}></Tabla>
    </>
  )
}
