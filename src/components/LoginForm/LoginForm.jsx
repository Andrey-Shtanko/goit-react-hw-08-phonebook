import { Form, Label, AddButton } from './../ContactForm/ContactForm.styled';
import { useState } from 'react';
import { logIn } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    formReset();
  };
  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Enter your email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Enter your password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>

      <AddButton type="submit">Log In</AddButton>
    </Form>
  );
};
