import { useState, useEffect } from 'react';
import { getTrending } from 'services/themoviedbApi';
import { TrendingListItem } from 'components/TrendingListItem/TrendingListItem';

export const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const movies = await getTrending();
        setMovies(movies.results);
      } catch (error) {
        setError(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <ol>
      {movies.map(movie => (
        <TrendingListItem key={movie.id} movie={movie}></TrendingListItem>
      ))}
    </ol>
  );
};
