import { Form, Label } from './../ContactForm/ContactForm.styled';
export const LoginForm = () => {
  return (
    <Form>
      <Label>
        Enter your email
        <input type="email" name="email" />
      </Label>
      <Label>
        Enter your password
        <input type="password" name="password" />
      </Label>

      <button type="submit">Log In</button>
    </Form>
  );
};
