
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


//     <>
//       <label>Find contacts by name</label>
//       <input type="text" value={this.state.filter} onChange={onFilter} />
//     </>
//   );
// };

// export const Filter = ({ value, onFilter }) => {
//   return (
//     <>
//       <label htmlFor="filter">Find contacts by name</label>
//       <input name="filter" type="text" id="filter" value={value} onChange={onFilter} />
//     </>
//   );
// };