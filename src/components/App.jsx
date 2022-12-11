import React, { Component } from 'react';
import Form from './Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// import { customAlphabet } from 'nanoid';
import { Container, Title, Subtitle } from './App.styled';

// const nanoid = customAlphabet('1234567890', 3);

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // handlerSubmit = data => {
  // const newContact = {
  //   ...data,
  //   id: nanoid(),

  //   name: data.name,
  //   number: data.number,
  // };

  // this.setState(({ contacts }) =>
  //   contacts.find(contact => contact.name === data.name)
  //     ? alert(`${data.name} is already in contacts`)
  //     : { contacts: [newContact, ...contacts] }
  // );

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prewProps, prewState) {
    const { contacts } = this.state;
    if (prewState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  handlerSubmit = data => {
    // const newContact = {
    //   ...data,
    //   id: nanoid(),
    // };

    const isExist = this.state.contacts.find(
      contact => contact.name === data.name
    );

    if (isExist) {
      return alert(`${data.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  //   const newContact = {
  //     ...data, id: nanoid(),

  //     name: data.name,
  //     number: data.number,

  //   };
  //   console.log(newContact);
  //   this.setState(prevState => ({

  //     contacts:[newContact, ...prevState.contacts]
  //   }))

  // }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // onFilter = e => {
  //   const { value } = e.currentTarget;
  //   this.setState({ filter: value });
  // };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    // const filteredContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.handlerSubmit} />
        <Subtitle>Contacts</Subtitle>

        <Filter value={filter} onFilter={this.changeFilter} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={filteredContacts}
        />
        {/* <input type="text" value={this.state.name} onChange={this.handleInputChange}/> */}
      </Container>
    );
  }
}
