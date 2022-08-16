import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

import { ThemeProvider } from 'styled-components';

import { dark } from './styles/themes/dark';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <App />

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
