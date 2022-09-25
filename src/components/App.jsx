import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContsctList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </div>
    );
  }
}
