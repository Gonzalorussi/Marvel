import React from 'react'
import './text-input.css'

function TextInput({ label, type, name, id, placeholder, value, onChange, error }) {

  return (
    <>
      <div className="input-group mb-3">
        <div className="form-floating">
          <input id={id} type={type} className={`form-control ${error.estado ? 'is-invalid':''}`} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
          <label htmlFor="password">{label}</label>
        </div>
        {error.estado && <div className="my-invalid-feedback">{error.message}</div>}
      </div>
    </>
  )
}

export default TextInput