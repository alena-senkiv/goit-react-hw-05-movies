import { useState, useEffect } from 'react';
import { getTrending } from 'services/themoviedbApi';
import { TrendingListItem } from 'components/TrendingListItem/TrendingListItem';

export const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const movies = await getTrending();
        setMovies(movies.results);
      } catch (error) {
        // setError(error);
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <ol>
      {movies.map(movie => (
        <TrendingListItem key={movie.id} movie={movie}></TrendingListItem>
      ))}
    </ol>
  );
};
