import { createReducer } from "../../common/util/reducerUtil";
import { CREATE_CARD, UPDATE_CARD, FETCH_CARDS } from "./cardConstants";

const initialState = [];

export const createCard = (state, payload) => {
  return [...state, Object.assign({}, payload.card)];
};

export const updateCard = (state, payload) => {
  return [
    ...state.filter(card => card.id !== payload.card.id),
    Object.assign({}, payload.card)
  ];
};

export const fetchCards = (state, payload) => {
  return payload.cards
}

export default createReducer(initialState, {
  [CREATE_CARD]: createCard,
  [UPDATE_CARD]: updateCard,
  [FETCH_CARDS]: fetchCards
});
