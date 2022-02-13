import { BallTriangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <BallTriangle
        color="#5d9df1"
        height={300}
        width={300}
        ariaLabel="loading-indicator"
      />
    </Wrapper>
  );
};
