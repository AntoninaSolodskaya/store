import { CREATE_CARD, UPDATE_CARD } from "./cardConstants";

export const createCard = card => {
  return {
    type: CREATE_CARD,
    payload: {
      card
    }
  };
};

export const updateCard = card => {
  return {
    type: UPDATE_CARD,
    payload: {
      card
    }
  };
};
