import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/tmdbApi';
import { Loader, Error } from 'components';
import { Status } from 'utils/stateMachine';
import { Button, BackLink, AdditionalBlock } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);
    async function fetchMovieDetails() {
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error />}
      {status === Status.RESOLVED && movie && (
        <>
          <BackLink to={location?.state?.from ?? '/'}>Go back</BackLink>
          <MovieDetailsCard movieDetails={movie} />
          <AdditionalBlock>
            <p>Additional information:</p>
            <Button to={'cast'} state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </Button>
            <Button
              to={'reviews'}
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </Button>
          </AdditionalBlock>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
