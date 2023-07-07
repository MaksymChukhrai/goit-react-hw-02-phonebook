import React from 'react';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
