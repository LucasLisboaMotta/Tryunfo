import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  handleTrunfo = (hasTrunfo, cardTrunfo, onInputChange) => {
    if (hasTrunfo) {
      return <span className="super">Você já tem um Super Trunfo em seu baralho</span>;
    }
    return (
      <label htmlFor="cardTrunfo" className="formLabel">
        Super Trunfo:
        <input
          id="cardTrunfo"
          name="cardTrunfo"
          data-testid="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>

        <label htmlFor="cardName" className="label1">
          Nome:
          <input
            className="input1"
            id="cardName"
            name="cardName"
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1" id="label2">
          Força:
          <input
            id="cardAttr1"
            name="cardAttr1"
            className="input3"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2" id="label3">
          Agilidade:
          <input
            id="cardAttr2"
            name="cardAttr2"
            className="input4"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Inteligencia:
          <input
            id="cardAttr3"
            className="input5"
            name="cardAttr3"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem:
          <input
            id="cardImage"
            name="cardImage"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription" id="label2">
          Descrição:
          <input
            type="text"
            className="input2"
            id="cardDescription"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            maxLength="200"
          />
        </label>

        <label htmlFor="cadRare" className="label-select">
          Rarirade:
          <select
            data-testid="rare-input"
            id="cadRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {this.handleTrunfo(hasTrunfo, cardTrunfo, onInputChange)}

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

const { string, bool, func } = PropTypes;

Form.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};

export default Form;
