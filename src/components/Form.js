import React from 'react';
import './Form.css';

// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <form>

        <label htmlFor="name">
          Nome
          <input id="name" name="name" data-testid="name-input" type="text" />
        </label>

        <label htmlFor="text-area">
          Descrição
          <textarea id="text-area" name="text-area" data-testid="description-input" />
        </label>

        <label htmlFor="attr1">
          Força
          <input id="attr1" name="attr1" data-testid="attr1-input" type="number" />
        </label>

        <label htmlFor="attr2">
          Agilidade
          <input id="attr2" name="attr2" data-testid="attr2-input" type="number" />
        </label>

        <label htmlFor="attr3">
          Inteligencia
          <input id="attr3" name="attr3" data-testid="attr3-input" type="number" />
        </label>

        <label htmlFor="image">
          Imagem
          <input id="image" name="image" data-testid="image-input" type="text" />
        </label>

        <label htmlFor="rare">
          Rarirade
          <select data-testid="rare-input" id="rare">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option Value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Inteligencia
          <input id="trunfo" name="trunfo" data-testid="trunfo-input" type="number" />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
