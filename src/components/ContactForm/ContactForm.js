// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
let model = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
console.log(model);

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };
  // onClickIncrementValue = e => {
  //   const activeBtnValue = e.target.textContent;
  //   this.setState(prevState => ({
  //     [activeBtnValue]: prevState[activeBtnValue] + 1,
  //   }));
  // };
  render() {
    return (
      <form className={s.form}>
        <label className={s.title}>
          name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.title}>
          number
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.button}>add to contact</button>
      </form>
    );
  }
}
