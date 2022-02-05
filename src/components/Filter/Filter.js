// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './Filter.module.css';

export default class Filter extends Component {
  state = {
    filter: '',
  };
  handleChenge = evt => {
    const name = evt.nativeEvent.data;
    console.log(name);
  };
  render() {
    return (
      <label className={s.title}>
        find contact by name
        <input
          onChange={this.handleChenge}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>
    );
  }
}
