import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazyLoader } from 'utils/lazyLoader';
import { Layout, Cast, Reviews } from 'components';

const HomePage = lazyLoader('HomePage');
const MoviesPage = lazyLoader('MoviesPage');
const MovieDetailsPage = lazyLoader('MovieDetailsPage');

export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
