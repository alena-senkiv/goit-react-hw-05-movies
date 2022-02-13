// import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazyLoader } from 'utils/lazyLoader';
import { Layout } from 'components';

const HomePage = lazyLoader('HomePage', 'pages');
const MoviesPage = lazyLoader('MoviesPage', 'pages');
const MovieDetailsPage = lazyLoader('MovieDetailsPage', 'pages');
const Cast = lazyLoader('Cast', 'components');
const Reviews = lazyLoader('Reviews', 'components');

export const App = () => {
  return (
    // <Suspense fallback="">
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
    // </Suspense>
  );
};
