import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListItem = styled.li`
  padding: 5px;
  border: 1px solid gray;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 30px;
  font-weight: 500;
  font-size: 18px;
`;

export const Contact = styled.span`
  display: flex;
  align-items: center;
  gap: 25px;
  min-width: 250px;
`;

export const ContactName = styled.span`
  font-weight: 700;
  font-size: 24px;
`;
export const DeleteButton = styled.button`
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
    background-color: #ff0000;
  }

  &:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
      inset 2px 2px 3px rgba(0, 0, 0, 0.6);
  }
`;
