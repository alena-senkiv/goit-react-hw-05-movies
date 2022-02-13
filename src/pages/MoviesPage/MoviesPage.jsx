import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { MoviesGallery, Loader, SearchBar } from 'components';
import { getMoviesSearch } from 'services/tmdbApi';
import { Status } from 'utils/stateMachine';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function fetchMovies() {
      setStatus(Status.PENDING);
      try {
        const movies = await getMoviesSearch(searchQuery);

        if (movies.results.length === 0) {
          setStatus(Status.REJECTED);
          toast.info('Sorry, no results were found');
          return;
        }

        setMovies(movies.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
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
      {status === Status.IDLE || (status === Status.RESOLVED && <></>)}
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && movies && (
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

export default MoviesPage;
