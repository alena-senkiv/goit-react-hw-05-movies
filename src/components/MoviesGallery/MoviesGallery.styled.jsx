import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  max-width: calc(100% - 30px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin: 20px auto;
  padding: 0;
`;

export const Title = styled.h1`
  display: block;
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.fontSecondary};
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background: ${({ theme: { colors } }) => colors.secondary};
  background: linear-gradient(
    90deg,
    ${({ theme: { colors } }) => colors.secondary} 0%,
    ${({ theme: { colors } }) => colors.secondary} 29%,
    ${({ theme: { colors } }) => colors.primary} 100%
  );
`;
