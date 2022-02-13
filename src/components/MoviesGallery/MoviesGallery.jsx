import PropTypes from 'prop-types';
import { MoviesGalleryItem } from 'components';
import { Wrapper, Title } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies, title, locationState }) => {
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
        {movies.map(movie => (
          <MoviesGalleryItem
            key={movie.id}
            movie={movie}
            locationState={locationState}
          />
        ))}
      </Wrapper>
    </>
  );
};

MoviesGallery.propTypes = {
  title: PropTypes.string,
  locationState: PropTypes.object.isRequired,
  movies: PropTypes.array,
};
