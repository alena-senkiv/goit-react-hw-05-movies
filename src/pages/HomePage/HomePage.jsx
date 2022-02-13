import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/tmdbApi';
import { MoviesGallery, Loader, Error } from 'components';
import { Status } from 'utils/stateMachine';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);

    async function fetchTrendingMovies() {
      try {
        const movies = await getTrending();
        setMovies(movies.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    }
    fetchTrendingMovies();
  }, []);
  return (
    <>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error />}
      {status === Status.RESOLVED && movies && (
        <MoviesGallery
          movies={movies}
          title={'Trending today:'}
          locationState={location}
        />
      )}
    </>
  );
};

export default HomePage;
