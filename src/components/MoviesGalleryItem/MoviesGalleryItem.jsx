import { Link } from 'react-router-dom';
import { BASE_URL_IMG } from 'services/tmdbApi';
import { Card, Img, Info } from './MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({
  movie: { id, title, overview, poster_path },
  locationState,
}) => {
  return (
    <Link to={`/movies/${id}`} state={{ from: locationState }}>
      <Card>
        <Img src={`${BASE_URL_IMG}/${poster_path}`} alt={title} />
        <Info>
          <h2>{title}</h2>
          <p>{`${overview.slice(0, 50)}...`}</p>
        </Info>
      </Card>
    </Link>
  );
};
