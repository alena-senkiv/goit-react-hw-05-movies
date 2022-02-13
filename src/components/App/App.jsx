// import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createChunk } from 'utils/createChunk';
import { Layout } from 'components';

const HomePage = createChunk('HomePage', 'pages');
const MoviesPage = createChunk('MoviesPage', 'pages');
const MovieDetailsPage = createChunk('MovieDetailsPage', 'pages');
const Cast = createChunk('Cast', 'components');
const Reviews = createChunk('Reviews', 'components');

export const App = () => {
  return (
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
  );
};
