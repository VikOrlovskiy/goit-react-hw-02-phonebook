// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }, index) => (
        <li key={id} className={s.list__item}>
          <div className={s.item__container}>
            <span>{index}</span>
            <span>{name}</span>
            <span>{number}</span>
            <button className={s.button}>delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
// ContactList.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
