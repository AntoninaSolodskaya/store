import { createReducer } from "../../common/util/reducerUtil";
import { CREATE_CARD, UPDATE_CARD, FETCH_CARDS, DELETE_CARD } from "./cardConstants";

const initialState = [];

export const createCard = (state, payload) => {
  return [...state, payload.card];
};

export const updateCard = (state, payload) => {
  return [
    ...state.filter(card => card._id !== payload.card._id),
    Object.assign({}, payload.card)
  ];
};

export const deleteCard = (state, payload) => {
  return [
    ...state.filter(card => card._id !== payload.cardId)
  ]
}

export const fetchCards = (state, payload) => {
  return payload.cards;
};

export default createReducer(initialState, {
  [CREATE_CARD]: createCard,
  [UPDATE_CARD]: updateCard,
  [DELETE_CARD]: deleteCard,
  [FETCH_CARDS]: fetchCards
});
