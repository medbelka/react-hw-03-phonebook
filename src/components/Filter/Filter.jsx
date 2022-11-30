// import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css'

const Filter = ({value, onChange}) => {
    return (
    <label >
    Find contacts by name
    <input 
        className={styles.inputFilter}
        type="text" 
        value={value} 
        onChange={onChange}/>
  </label>
    )
}

export default Filter;

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
// }