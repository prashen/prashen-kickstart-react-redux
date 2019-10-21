import { combineReducers } from 'redux'

import { 
  INCREMENT, 
  DECREMENT, 
  RESET,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR
} from './actionTypes';

const initialState = {
  pending: false,
  post: [],
  error: null
}

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_POST_SUCCESS: {
      return {
        ...state,
        pending: false,
        post: action.payload
      }
    }
    case FETCH_POST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const incrementDecrementReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

const HomeReducers = combineReducers({
  count: incrementDecrementReducer,
  posts: postReducer
})

export default HomeReducers;

