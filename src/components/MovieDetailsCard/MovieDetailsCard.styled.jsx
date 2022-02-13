import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  margin: 30px 0;
`;

export const Img = styled.img`
  display: block;
  width: 300px;
  border-radius: 5px;
`;

export const MovieInfo = styled.div`
  flex: 1;
  min-width: 200px;
  margin-left: 20px;
  color: ${({ theme: { colors } }) => colors.fontPrimary};
`;
