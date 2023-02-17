import { useState } from 'react'

export function ItemFactura(){
  return (
    <>
      <article className='item-factura--container'>
        <span className='valor'>$50.0000</span>
        <p className='id-factura'>#12321</p>
        <span className='cliente'>Andres Laguilavo</span>
        {/* <div class="pendiente">Pendiente</div> */}
        <div class="entregado">Entregado</div>
        <span className='fecha'>16 Feb</span>
      </article>
    </>
  )
}