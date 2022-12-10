import React from 'react'
import StyledSection from './style'
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({h3, onClick, children}) => {
    return (
      <StyledSection>
        <div>
          <span>
            <h3>{h3}</h3>
            <IoCloseSharp onClick={onClick} />
          </span>
          {children}
        </div>
      </StyledSection>
    );
}

export default Modal