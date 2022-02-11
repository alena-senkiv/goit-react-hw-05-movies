import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin: 20px auto;
  padding: 0;
  list-style: none;
`;
