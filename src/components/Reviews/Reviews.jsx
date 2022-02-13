import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/tmdbApi';
import { ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieReviews = await getReviews(movieId);

        if (movieReviews.results.length === 0) {
          return;
        }
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <span> Author: {author}</span>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
