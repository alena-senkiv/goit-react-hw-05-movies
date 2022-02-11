import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`;

export const Title = styled.h1`
  display: block;
  width: 100%;
  margin: 20px auto;

  padding: 20px;
  text-align: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(8, 8, 24, 1) 29%,
    rgba(96, 163, 250, 1) 100%
  );
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);

  color: #fff;
  border-radius: 5px;
`;
