
import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from "./Filter.styled"

export const Filter = ({ value, onFilter }) => {
  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onFilter} />
    </Wrapper>)
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

