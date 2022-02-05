import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { Routes, Route } from 'react-router-dom';
import { Home, MoviesPage, MovieDetailsPage, Cast, Reviews } from 'pages';
import { GlobalStyle } from 'styles/GlobalStyle.styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
