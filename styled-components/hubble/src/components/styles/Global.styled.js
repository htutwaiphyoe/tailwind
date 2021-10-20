import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }

    button{
        outline: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
    }

`;
