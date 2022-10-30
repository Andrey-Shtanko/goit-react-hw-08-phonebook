import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { LayoutStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#04c4ff',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </LayoutStyled>
  );
};
