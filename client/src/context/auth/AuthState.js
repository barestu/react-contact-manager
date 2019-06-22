import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducers from './authReducers';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from './authTypes';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    isLoading: true,
    isError: null,
  };

  const [state, dispatch] = useReducer(authReducers, initialState);

  

  return (
    <AuthContext.Provider value={{ ...state }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
