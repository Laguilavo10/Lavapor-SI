import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function ItemFactura({data}){
  let navigate = useNavigate()

  const masInfoFactura = (data)=>{
    navigate(`/facturas?id=${data.id}`, {state:data})
  }
  return (
    <>
      <article className='item-factura--container' onClick={()=>masInfoFactura(data)}>
        <span className='valor'>${data.valor}</span>
        <p className='id-factura'>#{data.id}</p>
        <span className='cliente'>{data.cliente}</span>
        <div className="entregado">{data.estado}</div>
        <span className='fecha'>{data.fecha}</span>
      </article>
    </>
  )
}