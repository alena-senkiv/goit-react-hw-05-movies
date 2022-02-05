// import { Routes, Route } from 'react-router-dom';
// import { Home, MoviesPage, MovieDetailsPage, Cast, Reviews } from 'pages';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <>
      <Layout />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes> */}
    </>

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
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
