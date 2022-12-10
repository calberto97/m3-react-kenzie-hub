import styled from "styled-components";

const StyledHomepage = styled.main`
  max-width: ${(props) => props.width};
  margin: 0 auto;

  section {
    padding: 45px 0;
    border-bottom: 1px solid var(--color-grey-3);
    border-top: 1px solid var(--color-grey-3);

    width: 100vw;
    margin-left: calc(50% - 50vw);

    margin-bottom: 40px;

    small {
      max-width: ${(props) => props.width};
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        color: var(--color-grey-1);
      }
    }
  }

  div {
    h1 {
      margin-bottom: 22px;
    }
  }

  @media (max-width: 850px) {
    section {
      padding: 45px 20px;
    }


  }

  @media (max-width: 550px) {
    section {
      small {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
      }
    }

  }
`;

export default StyledHomepage;
