import React from 'react';
import PropTypes from 'prop-types';

class InputCheckFilter extends React.Component {
  render() {
    const {
      onInputChange,
      inputCheckFilter,
    } = this.props;
    return (
      <input
        type="checkbox"
        data-testid="trunfo-filter"
        onChange={ onInputChange }
        value={ inputCheckFilter }
        name="inputCheckFilter"
      />
    );
  }
}

const { bool, func } = PropTypes;

InputCheckFilter.propTypes = {
  onInputChange: func.isRequired,
  inputCheckFilter: bool.isRequired,
};

export default InputCheckFilter;
