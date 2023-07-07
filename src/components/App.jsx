import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [contactName, setContactName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactName.trim() === '') return;

    const isExist = contacts.some((contact) => contact.name.toLowerCase() === contactName.toLowerCase());
    if (isExist) {
      alert(`${contactName} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
    };

    setContacts([...contacts, newContact]);
    setContactName('');
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h2>Name </h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <input
        type="text"
        placeholder="Filter contacts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ContactsList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;


