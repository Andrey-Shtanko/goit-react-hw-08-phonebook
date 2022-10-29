import styled from '@emotion/styled';
export const UserMenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const LogoutBtn = styled.button`
  border-radius: 3px;
  border: 0;
  line-height: 1.5;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fbff00;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: #00eeff;
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(255, 0, 0, 1);
  }

  &:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
      inset 2px 2px 3px rgba(0, 0, 0, 0.6);
  }
`;

export const User = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
