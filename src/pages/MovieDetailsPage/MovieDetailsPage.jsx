import { Link, Outlet } from 'react-router-dom';

export const MovieDetailsPage = () => {
  return (
    <>
      <h2>MovieDetailsPage</h2>
      <nav>
        <Link to="/movies/:movieId/cast">Cast</Link>
        <br />
        <Link to="/movies/:movieId/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};
