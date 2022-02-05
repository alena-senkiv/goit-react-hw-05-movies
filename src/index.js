import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { GlobalStyle } from 'styles/GlobalStyle.styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
