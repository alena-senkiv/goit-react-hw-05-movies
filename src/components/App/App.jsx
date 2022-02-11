import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage, MoviesPage, MovieDetailsPage } from 'pages';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Layout } from 'components/Layout/Layout';

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

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="movies" element={<MoviesPage />}>
    //       <Route path=":movieId" element={<MovieDetailsPage />}>
    //         <Route path="cast" element={<Cast />} />
    //         <Route path="reviews" element={<Reviews />} />
    //       </Route>
    //     </Route>
    //   </Route>
    // </Routes>
  );
};
