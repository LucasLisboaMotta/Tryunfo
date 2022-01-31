import React from 'react';
import PropTypes from 'prop-types';

class InputSelectFilter extends React.Component {
  render() {
    const {
      onInputChange,
      inputSelectFilter,
    } = this.props;
    return (
      <label htmlFor="inputSelectFilter">
        Raridade
        <select
          data-testid="rare-filter"
          onChange={ onInputChange }
          value={ inputSelectFilter }
          name="inputSelectFilter"
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

const { string, func } = PropTypes;

InputSelectFilter.propTypes = {
  onInputChange: func.isRequired,
  inputSelectFilter: string.isRequired,
};

export default InputSelectFilter;
