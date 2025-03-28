import css from './ContactForm.module.css';

import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const userSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
    phone: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = { username: '', phone: '' };

export default function ContactForm ({ onAdd }) {
    const nameFieldId = nanoid();
    const phoneFieldId = nanoid();

    const handleSubmit = (values, action) => {
        const newContact = {
          id: nanoid(),
          name: values.username,
          number: values.phone,
        };
        onAdd(newContact);
        action.resetForm();
      };
    return (
      <Formik    
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
            <Form className={css.form}>
                <div>
                  <label className={css.label}>Name:</label>
                  <Field className={css.input} type="text" name="username" id={nameFieldId}/>
                  <ErrorMessage className={css.error} name="username" component="span"/>
                </div>
                <div>
                  <label className={css.label}>Phone:</label>
                  <Field className={css.input} type="Phone" name="phone" id={phoneFieldId}/>
                  <ErrorMessage className={css.error} name="phone" component="span"/>
              </div>
              <button className={css.btn} type="submit">
                Add contact
              </button>
            </Form>
      </Formik>
    )}