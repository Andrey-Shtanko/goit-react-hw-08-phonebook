import PropTypes from 'prop-types';
import { List, ListItem, Contact } from './ContsctList.styled';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>

            <button onClick={() => onDelete(id)}>Delete</button>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
