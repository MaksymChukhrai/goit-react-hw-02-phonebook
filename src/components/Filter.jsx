import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        placeholder="Filter contacts"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

