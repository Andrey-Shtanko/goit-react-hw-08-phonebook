import { LogoutBtn, UserMenuLinks, User } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'Redux/auth/authSelectors';
import { logOut } from './../../Redux/auth/authOperations';
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuLinks>
      <User>{user.email}</User>
      <LogoutBtn onClick={() => handleLogout()}>Logout</LogoutBtn>
    </UserMenuLinks>
  );
};
