import { useState, useEffect } from 'react';
import Form from './Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { customAlphabet } from 'nanoid';
import { Container, Title, Subtitle } from './App.styled';
import { initialContacts } from 'data/initialContacts';
import { useLocalStorage } from 'hooks/useLocalStorage';

const nanoid = customAlphabet('1234567890', 3);

const CONTACT_KEY = 'contacts'

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem(CONTACT_KEY,JSON.stringify(contacts))
  }, [contacts])

//   const handlerSubmit = newContact => {
//     setContacts(prevContacts => {
//       if (prevContacts.find(contact => contact.name === newContact.name)) {
//         alert(`${newContact.name} is already in contacts.`);
//         return prevContacts
//       }
//       return [newContact, ...prevContacts]
//   })
// }




  const formSubmitHandler = data => {
    const newContact = {
      ...data, id: nanoid()
    }

    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() ===newContact.name.toLowerCase()
    );
    
    if (isExist) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    
   setContacts(prevContacts => [newContact, ...prevContacts])

  }

   const changeFilter = e => {
    setFilter(e.currentTarget.value );
  };

  

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
    
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );



    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={formSubmitHandler} />
        <Subtitle>Contacts</Subtitle>

        <Filter value={filter} onFilter={changeFilter} />
        <ContactList
          deleteContact={deleteContact}
          contacts={filteredContacts}
        />
        {/* <input type="text" value={this.state.name} onChange={this.handleInputChange}/> */}
      </Container>
    );
  }

