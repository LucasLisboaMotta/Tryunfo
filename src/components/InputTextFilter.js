import React from 'react';
import PropTypes from 'prop-types';

class InputTextFilter extends React.Component {
  render() {
    const {
      onInputChange,
      inputTextFilter,
    } = this.props;
    return (
      <input
        data-testid="name-filter"
        type="text"
        onChange={ onInputChange }
        value={ inputTextFilter }
        name="inputTextFilter"
      />
    );
  }
}

const { string, func } = PropTypes;

InputTextFilter.propTypes = {
  onInputChange: func.isRequired,
  inputTextFilter: string.isRequired,
};

export default InputTextFilter;
