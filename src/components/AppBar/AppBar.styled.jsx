import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 60px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  color: rgb(2, 0, 36);

  font-size: 25px;
  font-weight: 700;
  &.active,
  &:hover {
    color: #5d9df1;
  }
`;
