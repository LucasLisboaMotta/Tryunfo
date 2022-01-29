import React from 'react';
import PropTypes from 'prop-types';
import './MiniCard.css';

class MiniCard extends React.Component {
  handleTrunfo = (trunfo) => {
    if (trunfo) return <h4 data-testid="trunfo-card">Super Trunfo</h4>;
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
      onInputChange,
    } = this.props;

    return (
      <article className="Minicard">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 }</span>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        {this.handleTrunfo(cardTrunfo)}
        <button
          type="button"
          data-testid="delete-button"
          name={ cardName }
          onClick={ onInputChange }
        >
          Excluir
        </button>
      </article>
    );
  }
}

const { string, bool, func } = PropTypes;

MiniCard.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  onInputChange: func.isRequired,
};

export default MiniCard;
