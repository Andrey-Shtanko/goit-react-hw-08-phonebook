import { Form } from './ContactForm.styled';
export const ContactForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={event => {
        onSubmit(event);
      }}
    >
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button type="submit">Add contact</button>
    </Form>
  );
};
