import { combineReducers } from 'redux'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './actionTypes';

const initialState = {
  isLoggedIn: false,
  userEmail: null
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoggedIn: false
      }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: action.loginStatus,
        userEmail: action.userEmail
      }
    }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error
      }
    default:
      return state;
  }
}

const LoginReducers = combineReducers({
  loginReducer
})

export default LoginReducers;

