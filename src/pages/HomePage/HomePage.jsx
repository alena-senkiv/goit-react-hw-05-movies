import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getTrending } from 'services/tmdbApi';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const movies = await getTrending();
        setMovies(movies.results);
        console.log(movies.results);
      } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);
  return (
    <>
      {movies && (
        <MoviesGallery
          movies={movies}
          title={'Trending today:'}
          locationState={location}
        />
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};
