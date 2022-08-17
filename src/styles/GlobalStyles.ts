import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;

   box-sizing: border-box;
  }

  html {
    font-size: 100%;
    
    @media (max-width: 768px) {
      font-size: 97.5%;
    }
  }

  body,
  input,
  button {
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.gray[100]};

    font-size: 1rem;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[100]};
  }

`;

export default GlobalStyles;
