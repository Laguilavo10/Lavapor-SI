import { useState } from 'react'

export function ItemFactura(){
  return (
    <>
      <article className='item-factura--container'>
        <span className='valor'>$50.0000</span>
        <span className='fecha'>16 Feb</span>
        <p className='id-factura'>#12321</p>
        <span className='estado'>Andres Laguilavo</span>
        <div class="pendiente">Pendiente</div>
      </article>
    </>
  )
}