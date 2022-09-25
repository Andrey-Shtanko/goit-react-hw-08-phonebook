import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContsctList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: event.target[0].value,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    this.inputReset(event);
  };

  inputReset = event => {
    event.target[0].value = ``;
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        {this.state.contacts.length !== 0 && (
          <ContactList contacts={this.state.contacts} />
        )}
      </Container>
    );
  }
}
