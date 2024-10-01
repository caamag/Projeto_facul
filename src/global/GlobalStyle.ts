
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
    }

    html{
        font-size: 62.5%;
        font-family: "Roboto Condensed", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        scroll-behavior: smooth;
    }

    button{
        cursor: pointer;
        border: none;
        font-family: "Roboto Condensed", sans-serif;
    }

    input, select {
        border: none;
        background-color: none;
        font-family: "Roboto Condensed", sans-serif;
    }
`;

export default GlobalStyle;