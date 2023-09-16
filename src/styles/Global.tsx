import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    padding: 0;
    margin: 0
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
