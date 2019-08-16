// import {
//     SET_CURRENT_USER,
//     USER_LOADING
//   } from "./authConstants";

//   const initialState = {
//     isAuthenticated: false,
//     user: {},
//     loading: false
//   };

//   export default function(state = initialState, action) {
//     switch (action.type) {
//       case SET_CURRENT_USER:
//         return {
//           ...state,
//           isAuthenticated: true,
//           user: action.payload
//         };
//       case USER_LOADING:
//         return {
//           ...state,
//           loading: true
//         };
//       default:
//         return state;
//     }
//   }

import { createReducer } from '../common/util/reducerUtil';
import { LOGIN_USER, SIGN_OUT_USER, LOGIN_ERROR, REGISTER_ERROR } from './authConstants';

const initialState = {
  currentUser: null
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.values.email,
    isErr: false
  }
};

export const loginError = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: null,
    isErr: true
  }
};

export const registerError = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: null,
    isErr: true
  }
};

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: null,
    isErr: false
  }
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGIN_ERROR]: loginError,
  [REGISTER_ERROR]: registerError,
  [SIGN_OUT_USER]: signOutUser
});