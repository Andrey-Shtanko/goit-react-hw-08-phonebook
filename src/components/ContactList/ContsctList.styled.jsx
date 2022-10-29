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
