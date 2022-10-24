import { List, ListItem, Contact } from './ContsctList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './../../Redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.stateRedux.contacts.items);
  const isLoading = useSelector(state => state.stateRedux.contacts.isLoading);

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
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <ListItem key={id}>
            <Contact>
              {name} : {phone}
            </Contact>

            <button onClick={() => deleteContactById(id)} disabled={isLoading}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
};
