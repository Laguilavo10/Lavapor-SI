import React from "react";

export function InputForm({name, type = 'text'}) {
  return (
      <>
        <label className="label-form">
          {name}
          <input type={type} className="input-form"/>
        </label>
      </>
    );
}
