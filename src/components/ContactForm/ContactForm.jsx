import { Form, Label } from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <button type="submit">Add contact</button>
    </Form>
  );
};
