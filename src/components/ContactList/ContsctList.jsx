import { List, ListItem } from './ContsctList.styled';
export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, tel }) => {
        return (
          <ListItem key={id}>
            {name}: {tel}
          </ListItem>
        );
      })}
    </List>
  );
};
