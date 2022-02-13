import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { buttonStyles } from 'components/Button/Button.styled';

export const Button = styled(NavLink)`
  &.active {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
  ${buttonStyles}
  margin-right: 20px;
`;

export const BackLink = styled(Link)`
  ${buttonStyles}
`;

export const AdditionalBlock = styled.div`
  margin-bottom: 25px;
  & p {
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
