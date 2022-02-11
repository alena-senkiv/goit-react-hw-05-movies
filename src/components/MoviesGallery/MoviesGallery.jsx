import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
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
