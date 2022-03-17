import ContactCard from './ContactCard';
import React from 'react';

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getId(id);
  };
  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">{renderList}</div>;
}
