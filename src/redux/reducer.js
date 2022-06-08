import { ADD_CARD, REMOVE_CARD } from "./action";

const INITIAL_STATE = {
  arrayOfCards: [],
};
function reducer(state = INITIAL_STATE, { type, card }) {
  if (type === ADD_CARD) return { ...state, arrayOfCards: [...state.arrayOfCards, card] };
  if (type === REMOVE_CARD) {
    const array = state.arrayOfCards.filter(({ cardName }) => cardName !== card.cardName);
    return { ...state, arrayOfCards: array };
  }
  return state;
}

export default reducer;
