import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: var(--color-grey-3);
  border-radius: 4px;

  padding: 42px 22px;
  max-width: 370px;
  min-height: 502px;

  margin: 0 auto;
  margin-bottom: 40px;

  h1 {
    text-align: center;
  }

  small {
    text-align: center;
    color: var(--color-grey-1);
  }
  
  span {
    color: var(--color-error);
    font-size: var(--font-size12);
    margin-top: -14px;
  }

  a {
    button {
      width: 100%;
    }
  }

`;

export default StyledForm