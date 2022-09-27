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

  formSubmitHandler = formData => {
    const contact = {
      id: nanoid(),
      name: formData.name,
      number: formData.number,
    };
    const names = this.state.contacts.map(({ name }) =>
      name.toLocaleLowerCase()
    );
    if (names.includes(formData.name.toLocaleLowerCase())) {
      return alert(`${formData.name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
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
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        {this.state.contacts.length !== 0 && (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        )}
      </Container>
    );
  }
}
