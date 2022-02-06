import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import s from './Main.module.css';

export default class Main extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  findContact(value) {
    console.log(value);
    console.log(this.setState({ filter: value }));
  }
  onChengeValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    const { contacts, filter } = this.state;
    console.log(this.state.filter);
    return (
      <div className={s.wraper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChengeValue={this.onChengeValue} />
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
