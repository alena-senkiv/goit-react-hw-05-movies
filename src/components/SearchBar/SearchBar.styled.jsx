import styled from 'styled-components';
import { buttonStyles } from 'components/Button/Button.styled';

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
  ${buttonStyles}
`;
