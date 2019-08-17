// import axios from "axios";
// import setAuthToken from "../common/util/setAuthToken";
// import jwt_decode from "jwt-decode";
// import {
//   GET_ERRORS,
//   SET_CURRENT_USER,
//   USER_LOADING
// } from "./authConstants";

// // Register User
// export const registerUser = (userData, history) => dispatch => {
//   axios
//     .post("/api/users/register", userData)
//     .then(res => history.push("/login")) 
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Login - get user token
// export const loginUser = userData => dispatch => {
//   axios
//     .post("/api/users/login", userData)
//     .then(res => {
//       // Save to localStorage
// // Set token to localStorage
//       const { token } = res.data;
//       localStorage.setItem("jwtToken", token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Set logged in user
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };

// // User loading
// export const setUserLoading = () => {
//   return {
//     type: USER_LOADING
//   };
// };

// // Log user out
// export const logoutUser = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };

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
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", user.token);
            localStorage.setItem("userId", user._id);
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
