import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { AppBar } from 'components';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </Container>
  );
};
