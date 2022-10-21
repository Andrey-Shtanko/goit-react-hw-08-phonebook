import { FilterField, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContact  } from 'Redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch()
 

  return (
    <FilterField>
      <FilterLabel>
        Find contacts by name
        <input type="text" name="filter" onChange={(event) => dispatch(filteredContact(event.target.value)) } />
      </FilterLabel>
    </FilterField>
  );
};
