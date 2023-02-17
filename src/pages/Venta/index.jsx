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
    <p></p>,
    <InputForm type="number" valueInput="1" />,
    <p></p>,
    <p></p>,
  ]

  const [countRows, setCountRows] = useState(inputsItemVenta)

  const addItemRow = (event) => {
    event.preventDefault()

    setCountRows((prev) => [...prev, ...inputsItemVenta])
  }

  const deleteItemRow = (event) => {
    event.preventDefault()
    if (countRows.length <= 5) return
    //elimina los ultimos 4 elementos
    countRows.splice(-0, 5)
    let newRows = [...countRows]
    setCountRows(newRows)
  }

  const [abono, setAbono] = useState(false)

  const handleAbono = () => {
    setAbono((prev) => !prev)
  }

  let fecha = new Date()
  const opciones = { day: "numeric", month: "short", year: "numeric" }
  let fechaFormateada = fecha.toLocaleDateString("en-US", opciones)

  const registrarVenta = ()=>{
    e.preventDefault()
  }


  return (
    <>
      <h2>Registrar Venta</h2>
      <p className="venta-fecha">{fechaFormateada}</p>
      <FormGrid className="form-venta" onSubmit={registrarVenta}>
        <div className="cliente-inputs">
          <InputForm name={"Cedula Cliente"} type={"number"} />
          <p></p>
        </div>
        <div className="vendedor-inputs">
          <InputForm name={"Cedula Vendedor"} type={"number"} />
          <p></p>
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

        {/* <div className="venta-observaciones">
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
        </div> */}
        <button className="btn-registro-venta">Registrar Venta</button>
      </FormGrid>
    </>
  )
}
