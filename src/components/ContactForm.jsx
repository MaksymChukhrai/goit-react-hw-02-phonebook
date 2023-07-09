import React from 'react';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;

    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Name:</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          <h2>Number:</h2>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button className="number-btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
