import {createGlobalStyle} from "styled-components";

import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
  }
  ul{
    list-style-type: none;
  }

  button {
    background-image: unset;
    border: none;
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }
`