import React from 'react'
import StyledInput from './style'

const Input = ({label, type, id, placeholder, register, disabled, defaultValue, children}) => {
  if (children === undefined) {
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} {...register} disabled={disabled} defaultValue={defaultValue} />
        </StyledInput>
    )
  } else {
    return (
      <StyledInput>
        <label htmlFor={id}>{label}</label>
          {children}
      </StyledInput>
    );
  }
}
export default Input