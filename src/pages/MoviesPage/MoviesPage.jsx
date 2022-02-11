import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getMoviesSearch } from 'services/tmdbApi';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function fetchMovies() {
      try {
        const movies = await getMoviesSearch(searchQuery);

        if (movies.results.length === 0) {
          setMovies(null);
          toast.info('Sorry, no results were found');
          return;
        }

        setMovies(movies.results);
      } catch (error) {
        toast.error('Something went wrong');
        console.log(error);
      }
    }
    fetchMovies();
  }, [searchQuery]);

  const handleSubmit = query => {
    if (!query.trim()) {
      setMovies(null);
      toast.info('Please, enter search query.');
    }
    setSearchParams({ query });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies && (
        <MoviesGallery
          movies={movies}
          title={`Search results`}
          locationState={location}
        />
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};
