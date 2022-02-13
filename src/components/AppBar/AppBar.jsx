import { Header, Nav, Link } from '../AppBar/AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
};
