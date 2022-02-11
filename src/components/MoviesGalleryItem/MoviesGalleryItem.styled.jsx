import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
`;

export const Info = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  text-decoration: none;
  opacity: 0;
  transform: translate(30px);
  transition: 0.5s;

  h2 {
    margin: 0;
    font-size: 20px;
  }

  p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }
`;

export const Card = styled.li`
  width: 200px;
  height: 300px;
  border-radius: 15px;
  padding: 15px;
  margin: 20px;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: translateY(10px);

    &:before {
      opacity: 1;
    }

    ${Info} {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
`;
