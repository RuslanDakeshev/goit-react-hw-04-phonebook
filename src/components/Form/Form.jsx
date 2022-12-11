import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { customAlphabet } from 'nanoid';
import { Wrapper, Label, Input, Btn, Container } from './Form.styled';

const nanoid = customAlphabet('1234567890', 3);

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    INITIAL_STATE,
  };
  nanoid = customAlphabet('1234567890abcdef', 10);
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  //   handleNameChange = event => {
  //     // console.log(event.currentTarget.value);
  //     this.setState({ name: event.currentTarget.value });
  //   };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.setState({ ...INITIAL_STATE });

    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <Wrapper>
          <Label htmlFor={this.nameInputId}>
            Name
            <Input
              type="text"
              name="name"
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
        </Wrapper>

        <Wrapper>
          <Label htmlFor={this.numberInputId}>
            Number
            <Input
              type="tel"
              name="number"
              id={this.numberInputId}
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </Wrapper>

        <Btn type="submit">Add contact</Btn>
      </Container>
    );
  }
}

Form.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Form;
