import { Form, Label } from './../ContactForm/ContactForm.styled';
export const RegistrationForm = () => {
  return (
    <Form>
      <Label>
        Enter your name
        <input type="text" name="name" />
      </Label>
      <Label>
        Enter your email
        <input type="email" name="email" />
      </Label>
      <Label>
        Enter your password
        <input type="password" name="password" />
      </Label>

      <button type="submit">Sign In</button>
    </Form>
  );
};
