import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'Redux/contacts/selectors';

export const Loading = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return <div>{isLoading && !error && <b>Waiting for contacts ... </b>}</div>;
};
