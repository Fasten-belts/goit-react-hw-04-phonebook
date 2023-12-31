import React, { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

function App() {
  const init = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? init
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(newContact) {
    const oldContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!oldContact) {
      setContacts(prevContacts => [
        ...prevContacts,
        { id: nanoid(), ...newContact },
      ]);
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  }

  function deleteContact(contactId) {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function getVisibleContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <Layout>
      <ContactForm onAddContact={addContact} />

      <Filter filter={filter} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Layout>
  );
}

export { App };
