import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); 

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
        color: #111;
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }

`;
