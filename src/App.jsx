import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactFrom';
import ContactList from './Contacts';
import Container from './Container';
import Filter from './Filter';
import { RiContactsLine } from 'react-icons/ri';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from './redux/contactsSelectors';

export default function App() {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
      <Container title='Phonebook'>
      <Toaster
        duration={3000}
        position="top-right"
        reverseOrder={false}
/>
      <ContactForm/>
      <h2> <RiContactsLine /> Contacts </h2>
      <Filter/>
      <ContactList/>     
      </Container>
  );
}