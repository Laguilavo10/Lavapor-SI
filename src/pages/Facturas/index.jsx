import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Busqueda } from "../../components/Busqueda"
import { ItemFactura } from "../../components/ItemFactura"
import { FacturaData } from "../../pages/FacturaData"

export function Facturas() {
  const facturas = [
    {
      id: 1,
      valor: 25000,
      estado: 'Entregado',
      cliente: 'Juan Perez',
      fecha: '2022-01-10'
    },
    {
      id: 2,
      valor: 32000,
      estado: 'Pendiente',
      cliente: 'Maria Hernandez',
      fecha: '2022-01-12'
    },
    {
      id: 3,
      valor: 15000,
      estado: 'Entregado',
      cliente: 'Pedro Ramirez',
      fecha: '2022-01-15'
    },
    {
      id: 4,
      valor: 45000,
      estado: 'Entregado',
      cliente: 'Ana Rodriguez',
      fecha: '2022-01-20'
    },
    {
      id: 5,
      valor: 28000,
      estado: 'Pendiente',
      cliente: 'Luisa Gutierrez',
      fecha: '2022-01-22'
    },
    {
      id: 6,
      valor: 17000,
      estado: 'Entregado',
      cliente: 'Andres Medina',
      fecha: '2022-01-25'
    },
    {
      id: 7,
      valor: 39000,
      estado: 'Entregado',
      cliente: 'Camila Torres',
      fecha: '2022-01-30'
    },
    {
      id: 8,
      valor: 22000,
      estado: 'Pendiente',
      cliente: 'Sara Perez',
      fecha: '2022-02-02'
    },
    {
      id: 9,
      valor: 28000,
      estado: 'Entregado',
      cliente: 'Diego Martinez',
      fecha: '2022-02-08'
    },
    {
      id: 10,
      valor: 30000,
      estado: 'Pendiente',
      cliente: 'Laura Suarez',
      fecha: '2022-02-10'
    }
  ];
  
  let {state} = useLocation()
  // console.log(uwu) 
  
  return (
    <>
      {state ? (
        <FacturaData data={state}/>
      ) : (
        <>
          <h2>Facturas</h2>
          <Busqueda />
          <section className="facturas-container">
            {facturas.map((data) => (
              <ItemFactura key={data.id} data={data}/>
            ))}
          </section>
        </>
      )}
    </>
  )
}
