import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from '../components/Filter/Filter';
import { GetNameForm } from '../components/GetNameForm/GetNameForm';
import { Contacts } from '../components/Contacts/Contacts';
import styles from '../components/App.module.css';

class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    }

    // if local storage contains any data = fulfill state contacts from local storage
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if(parsedContacts) {
      this.setState({ contacts : parsedContacts });
    }
  }
  
  // saving to local storage every update of state contacts
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  // function for deleting contact from contact list
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  // function for adding new contact to contact list, contains alert, preventing adding contacts that already exist
  addContact = (name, number) => {
    const existingContact = this.state.contacts.find(contact=>
      contact.name === name )
    if (existingContact) {
      alert(`${name} is already in contacts`)
    }
      else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts]
      })) }
  }

  // function to receive values from formik add putting data to addContact
  handleSubmit = (values, {resetForm}) => {
    this.addContact(values.name, values.number)
    resetForm()
  }

  // function for listening changes in filter input
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  // function for filtering contacts including symbols from filter input
  getVisibleContacts = () =>{
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
      );
  }

render () {
  const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();
  return (
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <GetNameForm onSubmit={this.handleSubmit}/>
          <Filter value={filter} onChange={this.changeFilter}/>
          <h2>Contacts</h2>
          <Contacts contacts={ visibleContacts } onDeleteContact={this.deleteContact} />
        </div>
      );
    }
};

export default App;