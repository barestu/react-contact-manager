import React, { useReducer } from 'react';
import axios from 'axios';
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

  const loadUser = () => console.log(loadUser);

  const register = async (formData) => {
    const config = {
      'Content-Type': 'application/json',
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  const login = () => console.log('login');

  const logout = () => console.log('logout');

  const clearErrors = () => console.log('clearErrors');

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loadUser,
        register,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
