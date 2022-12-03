import React from "react";
import StyledForm from "./style";

const Form = ({ h1, small, onSubmit, children }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h1>{h1}</h1>
      <small>{small}</small>
      {children}
    </StyledForm>
  );
};

export default Form;
