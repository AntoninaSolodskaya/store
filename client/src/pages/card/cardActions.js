import { CREATE_CARD, UPDATE_CARD, FETCH_CARDS } from "./cardConstants";
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../async/asyncActions';
import { fetchSampleData } from '../../data/mockApi';

export const fetchCards = cards => {
  return {
    type: FETCH_CARDS,
    payload: cards
  }
};

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

export const loadCards = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let cards = await fetchSampleData();
      dispatch(fetchCards(cards))
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
}