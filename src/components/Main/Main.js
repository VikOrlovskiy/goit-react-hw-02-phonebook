import React, { Component } from 'react';

import Section from '../Section';
import RegistrationForm from '../RegistrationForm';
import FindForm from '../FindForm';
import ContactList from '../ContactList';

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
  // onClickIncrementValue = e => {
  //   const activeBtnValue = e.target.textContent;
  //   this.setState(prevState => ({
  //     [activeBtnValue]: prevState[activeBtnValue] + 1,
  //   }));
  // };
  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <RegistrationForm />
        </Section>
        <Section title={'Contacts'}>
          <FindForm />
        </Section>
        <Section title={'data'}>
          <ContactList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
