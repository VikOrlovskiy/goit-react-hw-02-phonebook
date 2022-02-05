// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './FindForm.module.css';

export default class FindForm extends Component {
  state = {
    contacts: [],
    filter: '',
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
          find contact by name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
      </form>
    );
  }
}
