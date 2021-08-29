import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import SearchContacts from './components/SearchContacts';


const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchContacts />
      <ContactsList />
    </>
  );
};

export default App;