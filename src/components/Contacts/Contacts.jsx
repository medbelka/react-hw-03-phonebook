// import PropTypes from 'prop-types';
import styles from '../Contacts/Contacts.module.css'

export const Contacts = ({ contacts, onDeleteContact }) => {
    return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
       <li key={id} className={styles.contact}>
            <span>{name}</span>
            <span className={styles.number}>{number}</span>
            <button className={styles.contactDelete} onClick={() => onDeleteContact(id)}>Delete</button>
       </li>
      ))}
    </ul>
    )
}

// Contacts.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// }