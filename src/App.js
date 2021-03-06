import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import MiniCard from './components/Minicard';
import InputTextFilter from './components/InputTextFilter';
import InputSelectFilter from './components/InputSelectFilter';
import InputCheckFilter from './components/InputCheckFilter';
import Header from './components/Header';
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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrozDeCartaz: [],
      inputTextFilter: '',
      inputSelectFilter: 'todas',
      inputCheckFilter: false,
    };
  }

  teste1 = ({ target }) => {
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
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: trunfo,
      });
    });
  }

  test3 = (objs) => {
    const { inputTextFilter, inputSelectFilter, inputCheckFilter } = this.state;
    if (inputCheckFilter) {
      const check = objs.find(({ cardTrunfo }) => cardTrunfo);
      if (!check) return;
      return (<MiniCard
        cardName={ check.cardName }
        cardDescription={ check.cardDescription }
        cardAttr1={ check.cardAttr1 }
        cardAttr2={ check.cardAttr2 }
        cardAttr3={ check.cardAttr3 }
        cardImage={ check.cardImage }
        cardRare={ check.cardRare }
        cardTrunfo={ check.cardTrunfo }
        onInputChange={ this.test4 }
      />);
    }
    const select = inputSelectFilter === 'todas' ? objs : objs
      .filter(({ cardRare }) => cardRare === inputSelectFilter);
    const text = select.filter(({ cardName }) => cardName.includes(inputTextFilter));
    const map = text.map(({ cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    }) => (<MiniCard
      cardName={ cardName }
      cardDescription={ cardDescription }
      cardAttr1={ cardAttr1 }
      cardAttr2={ cardAttr2 }
      cardAttr3={ cardAttr3 }
      cardImage={ cardImage }
      cardRare={ cardRare }
      cardTrunfo={ cardTrunfo }
      key={ cardName }
      onInputChange={ this.test4 }
    />));
    return map;
  }

  test4 = ({ target: { name } }) => {
    this.setState(({ arrozDeCartaz, hasTrunfo }) => {
      const trunfo = {};
      if (hasTrunfo) {
        const bool = arrozDeCartaz.find(({ cardName }) => cardName === name).cardTrunfo;
        trunfo.hasTrunfo = !bool;
      }
      trunfo.arrozDeCartaz = arrozDeCartaz.filter(({ cardName }) => cardName !== name);
      return trunfo;
    });
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
      arrozDeCartaz,
      inputTextFilter,
      inputSelectFilter,
      inputCheckFilter,
    } = this.state;
    return (
      <>
        <Header />
        <main>
          <section className="top">
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
          <div>
            <div>
              <InputTextFilter
                onInputChange={ this.teste1 }
                inputTextFilter={ inputTextFilter }
              />
              <InputSelectFilter
                onInputChange={ this.teste1 }
                inputSelectFilter={ inputSelectFilter }
              />
              <InputCheckFilter
                onInputChange={ this.teste1 }
                inputCheckFilter={ inputCheckFilter }
              />
            </div>
            <section className="bot">
              {this.test3(arrozDeCartaz)}
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default App;
