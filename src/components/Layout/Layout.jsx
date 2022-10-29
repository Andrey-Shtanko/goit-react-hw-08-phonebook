import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { LayoutStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutStyled>
      <AppBar />
      <Outlet />
    </LayoutStyled>
  );
};
