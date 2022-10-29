import {
  List,
  ListItem,
  Contact,
  ContactName,
  DeleteButton,
} from './ContsctList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './../../Redux/contacts/operations';
import {
  selectIsLoading,
  selectVisibleontacts,
} from 'Redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(selectVisibleontacts);
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Contact>
              <ContactName>{name}:</ContactName>
              <span>{number}</span>
            </Contact>

            <DeleteButton
              onClick={() => deleteContactById(id)}
              disabled={isLoading}
            >
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
};
