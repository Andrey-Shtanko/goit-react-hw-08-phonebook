import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  color: black;

  &.active {
    font-weight: 900;
    color: #0051ff;
  }
`;
