import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: var(--color-grey-4);
        color: var(--color-grey-0);
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-error: #E83F5B;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        --font-size12: 12px;
        --font-size14: 14px;
        --font-size16: 16px;
        --font-size18: 18px;
        --font-size24: 24px;
    }

    h1 {
        font-size: var(--font-size18);
        font-weight: 700;
        line-height: 28px;
    }

    h2 {
        font-size: var(--font-size16);
        font-weight: 600;
        line-height: 28px;
    }

    h3 {
        font-size: var(--font-size14);
        font-weight: 700;
        line-height: 28px;
    }

    @media (max-width: 850px){
        body {
            padding: 0 20px;
        }
  }
`;
export default GlobalStyle;
