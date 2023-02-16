import { useState } from "react"

export function InputForm({ name, type = "text", valueInput = '', isDisabled = false }) {
  const [value, setValue] = useState(valueInput);
  
  const handleValueInput = (e)=>{
    setValue(e.target.value)
  }
  return (
    <>
      <label className="label-form">
        {name}
        {value ? (
          <input type={type} className="input-form" value={value} disabled={isDisabled} onChange={handleValueInput} name={name}/>
        ) : (
          <input type={type} className="input-form" disabled={isDisabled} value={value} onChange={handleValueInput}/>
        )}
      </label>
    </>
  )
}
