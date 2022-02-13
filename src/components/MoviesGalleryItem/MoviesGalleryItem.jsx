import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BASE_URL_IMG } from 'services/tmdbApi';
import fallback from 'images/fallback.jpg';
import { Card, Img, Info } from './MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({
  movie: { id, title, overview = '', poster_path },
  locationState,
}) => {
  return (
    <Link to={`/movies/${id}`} state={{ from: locationState }}>
      <Card>
        <Img
          src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback}
          alt={title}
        />
        <Info>
          <h2>{title}</h2>
          <p>{`${overview.slice(0, 50)}...`}</p>
        </Info>
      </Card>
    </Link>
  );
};

MoviesGalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
  locationState: PropTypes.object.isRequired,
};
