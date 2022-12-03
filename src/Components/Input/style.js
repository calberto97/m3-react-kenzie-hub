import styled from "styled-components";

const StyledInput = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 22px;

  label {
    font-size: var(--font-size12);
    font-weight: 400;
  }

  input, select {
    background-color: var(--color-grey-2);
    height: 48px;
    padding: 0 16px;
    border: 1px solid transparent;
    border-radius: 4px;

    color: var(--color-grey-1);
    font-size: var(--font-size16);
    font-weight: 400;
  }

  input::placeholder {
    color: var(--color-grey-1);
  }

  input:focus, select:focus {
    outline: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
  }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  p {
    color: red;
  }
`;

export default StyledInput;
