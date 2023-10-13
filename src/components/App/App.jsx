import css from './app.module.css';
import { ContactForm, Filter, ContactList } from 'components';

export const App = () => {
  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
