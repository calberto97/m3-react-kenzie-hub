import React from "react";
import StyledButton from "./style";

const Button = ({ type, pink, small, innerText, disabled, onClick }) => {
  return (
    <StyledButton
      type={type}
      pink={pink}
      small={small}
      disabled={disabled}
      onClick={onClick}
    >
      {innerText}
    </StyledButton>
  );
};

export default Button;
