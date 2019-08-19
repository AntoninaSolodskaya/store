import { CREATE_CARD, UPDATE_CARD, DELETE_CARD, FETCH_CARDS } from "./cardConstants";
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../async/asyncActions';
import instance from '../../common/util/api';

export const fetchCards = cards => {
  return {
    type: FETCH_CARDS,
    payload: {
      cards
    }
  }
};

export const postCard = card => {
  return {
    type: CREATE_CARD,
    payload: { 
      card 
    }
  };
};

export const createCard = card => {
  return (dispatch) => {
    instance.post(`/products`, card )
      .then((newCard) => {
        dispatch(postCard(newCard))
      })
  }
};

export const updateCard = card => {
  return {
    type: UPDATE_CARD,
    payload: {
      card
    }
  };
};

export const updatedCard = (cardId, card) => {
  return (dispatch) => {
    instance.put(`/products/${cardId}`, card)
      .then((orderCard) => {
        dispatch(updateCard(orderCard[0]))
    })
  }
};

export const deletedCard = cardId => {
  return {
    type: DELETE_CARD,
    payload: {
      cardId
    }
  };
};

export const deleteCard = cardId => {
  return (dispatch) => {
    instance.delete(`/products/${cardId}`)
      .then(() => {
        dispatch(deletedCard(cardId))
      });
  }
};


export const loadCards = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      await instance.get(`/products`)
      .then(cards => {
        dispatch(fetchCards(cards))
      })
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
}
