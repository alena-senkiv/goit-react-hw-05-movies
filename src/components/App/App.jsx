import { Routes, Route } from 'react-router-dom';
import { HomePage, MoviesPage, MovieDetailsPage, Cast, Reviews } from 'pages';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>

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
