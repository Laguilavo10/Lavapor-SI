import { useState } from 'react'

export function useAddDeleteRow(){

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


  return {}
}