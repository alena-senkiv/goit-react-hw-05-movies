import { Header, Nav, Link } from '../AppBar/AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
};

export default AppBar;
