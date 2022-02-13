import PropTypes from 'prop-types';
import { BASE_URL_IMG } from 'services/tmdbApi';
import fallback from 'images/fallback.jpg';
import { CardWrapper, Img, MovieInfo } from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({
  movieDetails: {
    title,
    release_date,
    genres,
    overview = '',
    poster_path,
    vote_average,
  },
}) => {
  const year = release_date.slice(0, 4);
  const userScore = vote_average * 10;
  return (
    <CardWrapper>
      <Img
        src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback}
        alt={title}
      />
      <MovieInfo>
        <h1>
          {title} ({year})
        </h1>
        <p>User score: {userScore}%</p>

        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres.map(({ id, name }) => (
          <span key={id}>{name} </span>
        ))}
      </MovieInfo>
    </CardWrapper>
  );
};

MovieDetailsCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
