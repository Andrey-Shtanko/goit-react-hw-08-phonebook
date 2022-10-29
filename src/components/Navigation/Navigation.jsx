import { Nav, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
    </Nav>
  );
};
