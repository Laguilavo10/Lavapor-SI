import { useState } from "react"
import { FormGrid } from "../../components/FormGrid"
import { GreenRedButtons } from "../../components/GreenRedButtons"
import { InputForm } from "../../components/InputForm"
import { Tabla } from "../../components/Tabla"
import { SVG } from "../../svg/collectionSVG"
import { headersTablaVenta } from "../../utils/headersTablas"

export function Venta() {
  const inputsItemVenta = [
    <InputForm type="number" />,
    <p>prueba</p>,
    <InputForm type="number" valueInput="1" />,
    <p>prueba</p>,
    <p>1000</p>,
  ]

  const [countRows, setCountRows] = useState(inputsItemVenta)

  const addItemRow = () => {
    setCountRows((prev) => [...prev, ...inputsItemVenta])
  }

  const deleteItemRow = () => {
    if (countRows.length <= 5) return
    //elimina los ultimos 4 elementos
    countRows.splice(-0, 5)
    let newRows = [...countRows]
    setCountRows(newRows)
  }


  const [abono, setAbono] = useState(false);

  const handleAbono = ()=>{
    setAbono(prev=>!prev)
  }
  
  return (
    <>
      <h2>Registrar Venta</h2>
      <p>13/02/2023</p>
      <FormGrid className="form-venta">
        <div className="cliente-inputs">
          <InputForm name={"Cedula Cliente"} type={"number"} />
          <p>Andres Felipe</p>
          {/* <InputForm isDisabled={true} valueInput={"Andres Felipe"} /> */}
        </div>
        <div className="vendedor-inputs">
          <InputForm name={"Cedula Vendedor"} type={"number"} />
          <p>Andres Felipe</p>
          {/* <InputForm isDisabled={true} valueInput={"Bibis rumo"} /> */}
        </div>

        <h2>Prendas</h2>
        <div className="handle-item--container">
          <GreenRedButtons
            green={"Agregar Item"}
            red={"Eliminar Item"}
            actionGreenBtn={addItemRow}
            actionRedBtn={deleteItemRow}
          />
        </div>

        <Tabla headers={headersTablaVenta} className={"tabla-venta"}>
          {...countRows}
        </Tabla>

        <div className="venta-observaciones">
          <h3>Observaciones</h3>
          <textarea
            name=""
            id=""
            placeholder="Escriba las observaciones de la venta "
          ></textarea>
        </div>

        <div className="total-venta">
          <div className="venta-abono">
            <p>Abono</p>
            <input type="checkbox" onClick={handleAbono}/>
            {abono && <InputForm type={"number"} name={'¿Cuanto?'}/>} 
          </div>
          <div className="valor-total">
            <p>Total:</p>
            <p>$1000</p>
          </div>
        </div>
        <button className="btn-registro-venta">Registrar Venta</button>
      </FormGrid>
    </>
  )
}
