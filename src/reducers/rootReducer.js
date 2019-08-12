import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import testReducer from "../testarea/testReducer";
import cardReducer from '../pages/card/cardReducer';

const rootReducer = combineReducers({
  form: formReducer,
  test: testReducer,
  cards: cardReducer
});

export default rootReducer;
