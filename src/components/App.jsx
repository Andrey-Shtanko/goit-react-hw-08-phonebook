import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContsctList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: event.target[0].value,
      number: event.target[1].value,
    };
    const names = this.state.contacts.map(({ name }) =>
      name.toLocaleLowerCase()
    );
    if (names.includes(event.target[0].value.toLocaleLowerCase())) {
      return alert(`${event.target[0].value} is already in contacts`);
    }
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    this.inputReset(event);
  };

  inputReset = event => {
    event.target[0].value = ``;
    event.target[1].value = ``;
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        {this.state.contacts.length !== 0 && (
          <ContactList contacts={visibleContacts} />
        )}
      </Container>
    );
  }
}
