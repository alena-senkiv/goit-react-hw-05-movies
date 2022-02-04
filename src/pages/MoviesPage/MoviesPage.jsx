import { SearchForm } from 'components/Search/Search';
import { Outlet } from 'react-router-dom';

export const MoviesPage = () => {
  return (
    <>
      <SearchForm />
      <Outlet />
    </>
  );
};
