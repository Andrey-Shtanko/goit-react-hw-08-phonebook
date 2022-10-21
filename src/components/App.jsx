
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContsctList';
import { deleteContact } from 'Redux/contactsSlice';
import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';



export const App = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)
  console.log(contacts);
  const filter = useSelector( state => state.filter)
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = (userName, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name: userName,
  //     number: number,
  //   };

  //   if (
  //     contacts
  //       .map(({ name }) => name.toLocaleLowerCase())
  //       .some(name => name === userName.toLocaleLowerCase())
  //   ) {
  //     return alert(`${userName} is already in contacts`);
  //   }

  //   setContacts(prevState => [contact, ...prevState]);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId))
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== contactId)
    // );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter  />
      {contacts.length !== 0 && (
        <ContactList contacts={visibleContacts} onDelete={ deleteContactById} />
      )}
    </Container>
  );
};
