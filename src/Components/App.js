import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState, useEffect } from 'react';
import React from 'react';
import './style.css';
import { uuid } from 'uuidv4';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveList) setContacts(retriveList);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        // getId={deleteContact}
      />
    </div>
  );
}
