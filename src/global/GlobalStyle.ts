
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
    }

    html{
        font-size: 62.5%;
        font-family: Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
    }

    button{
        cursor: pointer;
        border: none;
    }

    input, select {
        border: none;
        background-color: none;
    }
`;

export default GlobalStyle;