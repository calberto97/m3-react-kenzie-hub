import styled from "styled-components";

const StyledSection = styled.section`
  background-color: rgba(0, 0, 0, 0.6);

  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
  
  z-index: 199;
  > div {
    background-color: var(--color-grey-3);
    width: 370px;
    /* min-height: 374px; */
    border-radius: 4px;
    overflow: hidden;
    
    z-index: 200;
    > span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 20px;
      background-color: var(--color-grey-2);
      
      svg {
        color: var(--color-grey-1);
        cursor: pointer;
      }
    }
  }
  
  > div {
    form {
      padding: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 85%;
      gap: 20px;
      
      label {
        margin-bottom: -10px;
      }

      span {
        color: var(--color-error);
        font-size: var(--font-size12);
        margin-top: -14px;
        display: inline-block;
      }

    }
    > small {
      margin-top: -10px;
      padding: 0 20px 10px;

      >button {
        width: 100%;
      }
    }
  }
`;

export default StyledSection;
