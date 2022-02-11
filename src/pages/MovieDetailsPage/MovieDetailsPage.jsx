import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/tmdbApi';
import { Button } from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    async function fetchMovieDetails() {
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
        console.log(movie);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {loading && <span>Loading...</span>}
      {movie && (
        <>
          <Button to={location?.state?.from ?? '/'}>Go back</Button>
          <MovieDetailsCard movieDetails={movie} />
          <div>
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
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};
