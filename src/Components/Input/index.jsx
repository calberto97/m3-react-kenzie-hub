import React from 'react'
import StyledInput from './style'

const Input = ({label, type, id, placeholder, register, disabled, children}) => {
  if (children === undefined) {
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} {...register} disabled={disabled} />
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