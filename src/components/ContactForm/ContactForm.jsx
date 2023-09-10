import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  LabelForm,
  InputForm,
  ErrorForm,
  ButtonForm,
} from './ContactForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(9, '9 digits required!')
    .max(13, 'Less than 13 symbols!')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <h1>Phonebook</h1>
        <LabelForm>
          Name
          <InputForm type="text" name="name" />
          <ErrorForm name="name" component="div" />
        </LabelForm>

        <LabelForm>
          Number
          <InputForm type="tel" name="number" />
          <ErrorForm name="number" component="div" />
        </LabelForm>

        <ButtonForm type="submit">Add Contact</ButtonForm>
      </StyledForm>
    </Formik>
  );
};
