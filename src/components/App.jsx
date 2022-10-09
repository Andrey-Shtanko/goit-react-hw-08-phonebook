import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContsctList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     this.setState({ contacts: contacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const formSubmitHandler = (userName, number) => {
    const contact = {
      id: nanoid(),
      name: userName,
      number: number,
    };

    if (
      contacts
        .map(({ name }) => name.toLocaleLowerCase())
        .some(name => name === userName.toLocaleLowerCase())
    ) {
      return alert(`${userName} is already in contacts`);
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      {contacts.length !== 0 && (
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      )}
    </Container>
  );
};
