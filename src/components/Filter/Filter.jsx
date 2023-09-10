import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => (
  <FilterWrapper>
    <h2>Contacts</h2>
    <FilterLabel>Find Contacts By Name</FilterLabel>
    <FilterInput
      type="text"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </FilterWrapper>
);
