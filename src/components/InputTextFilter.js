import React from 'react';
import PropTypes from 'prop-types';

class InputTextFilter extends React.Component {
  render() {
    const {
      onInputChange,
      inputTextFilter,
    } = this.props;
    return (
      <label htmlFor="inputTextFilter">
        Nome
        <input
          data-testid="name-filter"
          type="text"
          onChange={ onInputChange }
          value={ inputTextFilter }
          name="inputTextFilter"
        />
      </label>
    );
  }
}

const { string, func } = PropTypes;

InputTextFilter.propTypes = {
  onInputChange: func.isRequired,
  inputTextFilter: string.isRequired,
};

export default InputTextFilter;
