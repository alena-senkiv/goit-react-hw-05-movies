import { BASE_URL_IMG } from 'services/tmdbApi';
import { CardWrapper, Img, MovieInfo } from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({
  movieDetails: {
    title,
    release_date,
    genres,
    overview,
    poster_path,
    vote_average,
  },
}) => {
  const year = release_date.slice(0, 4);
  const userScore = vote_average * 10;
  return (
    <CardWrapper>
      <Img src={`${BASE_URL_IMG}/${poster_path}`} alt={title} />
      <MovieInfo>
        <h1>
          {title} ({year})
        </h1>
        <p>User score: {userScore}%</p>

        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres.map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </MovieInfo>
    </CardWrapper>
  );
};
