import {useState} from 'react';
import PropTypes from 'prop-types';
// import { customAlphabet } from 'nanoid';
import { Wrapper, Label, Input, Btn, Container } from './Form.styled';

// const nanoid = customAlphabet('1234567890', 3);




//   nanoid = customAlphabet('1234567890abcdef', 10);
//   nameInputId = nanoid();
//   numberInputId = nanoid();

 

  export const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleChange = e => {
      const { name, value } = e.currentTarget;
      
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value)
          break;
        default:
          return;
      }

    }

    const handleSubmit = e => {
      e.preventDefault();
      onSubmit({ name, number })
      setName('')
      setNumber('')
    }
    




  
    return (
      <Container onSubmit={handleSubmit}>
        <Wrapper>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
        </Wrapper>

        <Wrapper>
          <Label >
            Number
            <Input
              type="tel"
              name="number"
             
              value={number}
              onChange={handleChange}
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

Form.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Form;
