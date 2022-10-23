import { List, ListItem, Contact } from './ContsctList.styled';
import { deleteContact } from 'Redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.stateRedux.contacts);

  const filter = useSelector(state => state.stateRedux.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>

            <button onClick={() => deleteContactById(id)}>Delete</button>
          </ListItem>
        );
      })}
    </List>
  );
};
