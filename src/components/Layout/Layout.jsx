import { Outlet } from 'react-router-dom';
import { Nav, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Outlet />
    </>
  );
};
