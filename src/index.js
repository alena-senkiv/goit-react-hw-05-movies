import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle.styled';
import { baseTheme } from 'styles/theme';
import { App } from 'components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={'/goit-react-hw-05-movies/'}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
