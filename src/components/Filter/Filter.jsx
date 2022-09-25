import { FilterField, FilterLabel } from './Filter.styled';
export const Filter = () => {
  return (
    <FilterField>
      <FilterLabel>
        Find contacts by name
        <input type="text" name="filter" />
      </FilterLabel>
    </FilterField>
  );
};
