import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { GlobalStyle } from 'styles/GlobalStyle.styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename={'/goit-react-hw-05-movies'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
