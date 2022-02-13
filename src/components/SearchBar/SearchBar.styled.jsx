import styled from 'styled-components';
import { buttonStyles } from 'components/Button/Button.styled';

export const Form = styled.form`
  width: 100%;
  display: flex;
`;

export const FormInput = styled.input`
  flex: 1;
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  border-radius: 5px;
  margin-right: 20px;
`;

export const Button = styled.button`
  ${buttonStyles}
`;
