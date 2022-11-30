import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styles from '../GetNameForm/GetNameForm.module.css';

const nameRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
const schema = yup.object().shape({
    name: yup.string().min(6).max(25).required(),
    number: yup.string().matches(nameRegex).required(),
})

const initialValues = {
    name: '',
    number: '',
  }

export const GetNameForm = ( {onSubmit} ) => {
    
    return ( 
        <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}
                >
        {({ isSubmitting, values, handleChange }) => (
            <Form className={styles.FormBox}> 
            <label className={styles.Label}>
                Name
                <Field
                    id="name"
                    className={styles.InputField}
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    // required
                />
            </label>
            <ErrorMessage name="name" component="div"/>
            <label className={styles.Label}>
                 Number
                <Field
                    id="number"
                    className={styles.InputField}
                    type="tel"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    //  required
                />
            </label>
            <ErrorMessage name="number" component="div"/>
            <button type="submit" disabled={isSubmitting} className={styles.SubmitButton}>Add contact</button>
        </Form> )}
        </Formik>
    )
  }


        // <form className={styles.FormBox} 
        // onSubmit={this.handleSubmit}>
        //     <label className={styles.Label}>
        //         Name
        //     <input
        //         className={styles.InputField}
        //         type="text"
        //         name="name"
        //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //         onChange={this.handleChangeName}
        //         required
        //         />
        //     </label>
        //     <label className={styles.Label}>
        //         Number
        //     <input
        //         className={styles.InputField}
        //         type="tel"
        //         name="number"
        //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //         onChange={this.handleChangeNumber}
        //         required
        //         />
        //     </label>
        //     <button type="submit" className={styles.SubmitButton}>Add contact</button>
        // </form>