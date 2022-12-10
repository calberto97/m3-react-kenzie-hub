import styled from "styled-components";

const StyledDiv = styled.div`
  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > span svg,
  p > svg {
    background-color: var(--color-grey-3);
    padding: 11px;
    box-sizing: content-box;
    border-radius: 4px;

    cursor: pointer;
    transition: 0.4s ease;
  }

  > span svg:hover {
    background-color: var(--color-grey-2);
  }

  ul {
    background-color: var(--color-grey-3);
    padding: 24px 22px;
    border-radius: 4px;
    height: fit-content;
    max-height: 550px;
    overflow-y: scroll;
    margin: 24px 0;

    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      background: var(--color-grey-3);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-grey-4);
      border-radius: 10px;
      border: 3px solid var(--color-grey-3);
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-grey-4);
    padding: 14px 22px;
    border-radius: 4px;

    transition: 0.4s ease;
    height: 50px;

    + li {
      margin-top: 16px;
    }

    :hover {
      background-color: var(--color-grey-2);
      > span {
        color: var(--color-grey-0);
      }
    }

    > p {
      font-size: var(--font-size14);
      font-weight: 700;
    }

    > span {
      color: var(--color-grey-1);
      display: flex;
      align-items: center;
    }
    > span > small {
      font-size: var(--font-size12);
    }
  }

  li > span > svg {
    cursor: pointer;
    margin-left: 24px;
    transition: 400ms ease;
  }

  li > span > svg:hover {
    color: var(--color-grey-1);
  }

  > div p > svg {
    /* display: flex; */
    padding: 3px 7px;
    width: 8px;
    cursor: default;
    position: relative;
    top: 5px;
  }
`;

export default StyledDiv;
