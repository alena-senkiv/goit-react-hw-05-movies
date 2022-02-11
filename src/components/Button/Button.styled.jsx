import { css } from 'styled-components';

export const buttonStyles = css`
  display: inline-block;
  min-width: 200px;
  min-height: 30px;
  margin-right: 20px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background-color: #5d9df1;
  cursor: pointer;
  &:hover {
    background-color: rgb(2, 0, 36);
  }
`;
