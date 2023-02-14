import { useState } from "react"
import { FormGrid } from "../../components/FormGrid"
import { InputForm } from "../../components/InputForm"
import { Tabla } from "../../components/Tabla"
import { SVG } from "../../svg/collectionSVG"
import { headersTablaVenta } from "../../utils/headersTablas"

export function Venta() {
  const inputsItemVenta = Array(4).fill(<InputForm type="text" />)
  const [countRows, setCountRows] = useState(inputsItemVenta)

  const addItemRow = () => {
    setCountRows((prev) => [...prev, ...inputsItemVenta])
  }

  const deleteItemRow = () => {
    if (countRows.length <= 4) return
    //elimina los ultimos 4 elementos
    countRows.splice(-0, 4)
    let newRows = [...countRows]
    setCountRows(newRows)
  }

  return (
    <>
      <h2>Registrar Venta</h2>
      <p>13/02/2023</p>
      <FormGrid className="form-venta">
        <div className="cliente-inputs">
          <InputForm name={"Cliente"} type={'number'}/>
          <p>Andres Felipe</p>
          {/* <InputForm isDisabled={true} valueInput={"Andres Felipe"} /> */}
        </div>
        <div className="vendedor-inputs">
          <InputForm name={"Vendedor"} type={'number'}/>
          <p>Andres Felipe</p>
          {/* <InputForm isDisabled={true} valueInput={"Bibis rumo"} /> */}
        </div>

        <h2>Prendas</h2>

        <div className="handle-item--container">
          <button className="btn-add--item" onClick={addItemRow}>
            Agregar Item
          </button>
          <button className="btn-delete--item" onClick={deleteItemRow}>
            Eliminar Item
          </button>
        </div>

        <Tabla headers={headersTablaVenta} className={"tabla-venta"}>
          {...countRows}
        </Tabla>

        <div className="venta-abono--container">
          <InputForm name={'Abono'} type={'number'}/>
        </div>
        <div className="total-venta">
          <p>Total:</p>
          <p>$1000</p>
        </div>
      </FormGrid>
    </>
  )
}
