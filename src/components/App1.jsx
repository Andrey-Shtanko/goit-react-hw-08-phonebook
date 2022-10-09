// import { Component } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContsctList';
// import { nanoid } from 'nanoid';
// import { Container } from './App.styled';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({ contacts: contacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = formData => {
//     const contact = {
//       id: nanoid(),
//       name: formData.name,
//       number: formData.number,
//     };

//     if (
//       this.state.contacts
//         .map(({ name }) => name.toLocaleLowerCase())
//         .some(name => name === formData.name.toLocaleLowerCase())
//     ) {
//       return alert(`${formData.name} is already in contacts`);
//     }

//     this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };
//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <Filter onChange={this.changeFilter} />
//         {this.state.contacts.length !== 0 && (
//           <ContactList
//             contacts={visibleContacts}
//             onDelete={this.deleteContact}
//           />
//         )}
//       </Container>
//     );
//   }
// }
