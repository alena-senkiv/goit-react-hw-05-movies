import styled from 'styled-components';

export const Form = styled.form`
  height: 50px;
`;

export const FormInput = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid rgb(2, 0, 36);
  border-radius: 5px;
  margin-right: 20px;
`;

export const Button = styled.button`
  min-width: 200px;
  min-height: 30px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  color: white;
  text-transform: uppercase;
  background-color: #5d9df1;
  cursor: pointer;
  &:hover {
    background-color: rgb(2, 0, 36);
  }
`;
