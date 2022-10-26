import { useSelector } from 'react-redux';

export const Loading = () => {
  const isLoading = useSelector(state => state.stateRedux.contacts.isLoading);
  const error = useSelector(state => state.stateRedux.contacts.error);
  return <div>{isLoading && !error && <b>Waiting for contacts ... </b>}</div>;
};
