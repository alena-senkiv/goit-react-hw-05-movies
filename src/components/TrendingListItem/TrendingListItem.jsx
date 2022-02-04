import { Link } from 'react-router-dom';

export const TrendingListItem = ({ movie: { id, title } }) => {
  return (
    <li>
      <Link to={`/movie/${id}`}>{title}</Link>
    </li>
  );
};
