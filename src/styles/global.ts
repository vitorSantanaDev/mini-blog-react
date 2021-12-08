import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    background-color: #050607;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #FFFF;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`