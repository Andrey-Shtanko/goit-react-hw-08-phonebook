// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContsctList';
// import { Loading } from './Loading/Loading';
// import { Container } from './App.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from './../Redux/operations';

// import { getIsContactExist } from './../Redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/Home/Home';
import { RegistrationPage } from 'pages/Registaration/Registration';
import { LoginPage } from './../pages/Login/Login';
import { ContactsPage } from './../pages/Contacts/Contacts';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getIsContactExist);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
    // <Container>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <Loading />
    //   {contacts && <ContactList />}
    // </Container>
  );
};
