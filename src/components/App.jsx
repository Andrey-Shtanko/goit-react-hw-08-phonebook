import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/Home/Home';
import { RegistrationPage } from 'pages/Registaration/Registration';
import { LoginPage } from './../pages/Login/Login';
import { ContactsPage } from './../pages/Contacts/Contacts';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from './../Redux/auth/authSelectors';
import { refreshUser } from 'Redux/auth/authOperations';
import { Loading } from './Loading/Loading';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
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
  );
};
