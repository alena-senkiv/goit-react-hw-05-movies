import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { buttonStyles } from 'components/Button/Button.styled';

export const Button = styled(NavLink)`
  &.active {
    background-color: rgb(2, 0, 36);
  }
  ${buttonStyles}
`;

export const BackLink = styled(Link)`
  ${buttonStyles}
`;
