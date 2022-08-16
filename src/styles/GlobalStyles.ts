import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  html {
    font-size: 97.5%;
  }

  body,
  input {
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export default GlobalStyles;
