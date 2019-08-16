import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import testReducer from "../testarea/testReducer";
import cardReducer from '../pages/card/cardReducer';
import asyncReducer from '../async/asyncReducer';
import authReducer from '../auth/authReducer';

const rootReducer = combineReducers({
  form: formReducer,
  test: testReducer,
  cards: cardReducer,
  async: asyncReducer,
  auth: authReducer
});

export default rootReducer;
