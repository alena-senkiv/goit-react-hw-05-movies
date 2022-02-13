import { css } from 'styled-components';

export const buttonStyles = css`
  display: inline-block;
  min-width: 200px;
  min-height: 30px;

  padding: 5px;
  border-radius: 5px;
  border: none;
  color: ${({ theme: { colors } }) => colors.fontSecondary};
  text-transform: uppercase;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
