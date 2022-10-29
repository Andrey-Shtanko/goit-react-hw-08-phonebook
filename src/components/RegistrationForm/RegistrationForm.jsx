import { Form, Label } from './../ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './../../Redux/auth/authOperations';
export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    formReset();
  };
  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
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
        Enter your name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
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

      <button type="submit">Sign In</button>
    </Form>
  );
};
