import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/tmdbApi';

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
        <ol>
          {reviews.map(review => (
            <li key={review.id}>
              <span>{review.author}</span>
              <p>{review.content}</p>
            </li>
          ))}
        </ol>
      ) : (
        'No reviews'
      )}
    </>
  );
};
