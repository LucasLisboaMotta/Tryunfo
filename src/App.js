import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrozDeCartaz: [],
    };
  }

  teste1 = ({ target }) => {
    console.log(target);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });

    this.setState((state) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = state;

      const strings = [cardName, cardDescription, cardImage, cardRare];
      const numbers = [cardAttr1, cardAttr2, cardAttr3];
      const trueString = strings.every((string) => string.length > 0);
      const trueNumber = numbers.every((number) => {
        const convertNumber = Number(number);
        const noventa = 90;
        return (convertNumber >= 0) && (convertNumber <= noventa);
      });
      const sunNumbers = numbers.reduce((acc, number) => acc + Number(number), 0);
      const duzentos = 210;
      const bool = !(sunNumbers <= duzentos && trueString && trueNumber);
      console.log(bool);
      return { isSaveButtonDisabled: bool };
    });
  }

  teste2 = (event) => {
    event.preventDefault();
    this.setState((state) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        arrozDeCartaz,
        hasTrunfo,
      } = state;

      const obj = {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      };
      let trunfo;
      if (hasTrunfo) trunfo = true;
      else trunfo = cardTrunfo;

      return ({

        arrozDeCartaz: [...arrozDeCartaz, obj],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: '',
        hasTrunfo: trunfo,
      });
    });
  }

  test3 = (objs) => objs.map(({ cardName,
    cardImage,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardRare,
    cardTrunfo,
  }) => (<Card
    cardName={ cardName }
    cardDescription={ cardDescription }
    cardAttr1={ cardAttr1 }
    cardAttr2={ cardAttr2 }
    cardAttr3={ cardAttr3 }
    cardImage={ cardImage }
    cardRare={ cardRare }
    cardTrunfo={ cardTrunfo }
    key={ cardName }
  />))

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
      arrozDeCartaz,
    } = this.state;
    return (
      <main>
        <h1>Tryunfo</h1>
        <section>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            hasTrunfo={ hasTrunfo }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.teste1 }
            onSaveButtonClick={ this.teste2 }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section>
          {this.test3(arrozDeCartaz)}
        </section>
      </main>
    );
  }
}

export default App;
