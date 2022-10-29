import { NavLink } from 'react-router-dom';
import { AuthLinks } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthLinks>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthLinks>
  );
};
