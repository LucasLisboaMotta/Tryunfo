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
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrozDeCartaz: [],
    };
  }

  teste1 = ({ target }) => {
    // console.log(target.name, target.value);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  teste2 = () => {
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
    } = this.state;

    obj = [{
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    }];
    this.setState({ arrozDeCartaz: [...arrozDeCartaz, obj] });
  }

  test3 = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const strings = [cardName, cardDescription, cardImage, cardRare];
    const numbers = [cardAttr1, cardAttr2, cardAttr3];
    const trueString = strings.every((string) => string.length > 0);
    const trueNumber = numbers.every((number) => {
      const convertNumber = Number(number);
      return (convertNumber >= 0) && (convertNumber <= 90);
    });
    const sun = numbers.reduce((acc, number) => acc + Number(number), 0);
    if (sun < 210 && trueString && trueNumber) this.setState({ isSaveButtonDisabled: false })
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
      </main>
    );
  }
}

export default App;
