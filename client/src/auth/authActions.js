import history from "../history";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_ERROR,
  REGISTER_ERROR,
  SIGN_OUT_USER
} from "./authConstants";

import instance from "../common/util/api";

export const loginUser = () => {
    return {
      type: LOGIN_USER
    };
  };

export const login = values => {
  return async dispatch => {
    dispatch({ type: LOGIN_USER, payload: { values } });
    try {
      await instance.post(`/users/login`, values)
        .then(user => {
          if (user) {
            localStorage.setItem("token", user.token);
            history.push("/")
          }
        });
    } catch (error) {
      console.log(error);
      if (error.data.message === "Incorrect password or email") {
        dispatch({ type: LOGIN_ERROR });
      }
    }
  };
};

export const registerUser = values => {
  return async dispatch => {
    dispatch({ type: REGISTER_USER, payload: { values } });
    try {
      await instance.post(`/users/register`, values)
        .then(user => {
          localStorage.setItem("email", user.email);
          history.push("/login")
        });
    } catch (error) {
      console.log(error);
      if (error.status === 500) {
        dispatch({ type: REGISTER_ERROR });
      }
    }
  };
};

export const logoutUser = () => {
  return {
    type: SIGN_OUT_USER
  };
};
