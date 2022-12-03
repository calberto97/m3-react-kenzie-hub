import styled from "styled-components";

const StyledButton = styled.button`
  height: ${(props) => (props.small ? "32px" : "48px")};
  padding: 0 ${(props) => (props.small ? "16px" : "22px")};
  border: 1px solid transparent;
  border-radius: 4px;

  background-color: ${(props) =>
    props.pink ? "var(--color-primary)" : "var(--color-grey-2)"};
  color: var(--color-grey-0);

  font-size: ${(props) =>
    props.small ? "var(--font-size12)" : "var(--font-size16)"};
  font-weight: ${(props) => (props.small ? "600" : "500")};

  transition: 0.4s ease;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.pink
        ? "var(--color-primary-focus)"
        : "var(--color-grey-1)"};
    color: var(--color-grey-0);
  }

  :disabled {
    background-color: var(--color-primary-negative);
  }
`;

export default StyledButton;
