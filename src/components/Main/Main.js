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
    name: '',
    number: '',
  };
  deleteContact = contactId => {
    this.setState(prewState => ({
      contacts: prewState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = contact => {
    this.setState(prewState => ({
      contacts: prewState.contacts.reduce(
        (contact,
        acc => {
          console.log(contact);
          console.log(acc);
        }),
      ),
    }));
  };
  // onClickIncrementValue = e => {
  //   const activeBtnValue = e.target.textContent;
  //   this.setState(prevState => ({
  //     [activeBtnValue]: prevState[activeBtnValue] + 1,
  //   }));
  // };
  render() {
    return (
      <div className={s.wraper}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
