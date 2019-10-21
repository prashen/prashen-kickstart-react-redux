import { combineReducers } from 'redux'

import { 
  FETCH_POST_DETAILS_PENDING,
  FETCH_POST_DETAILS_SUCCESS,
  FETCH_POST_DETAILS_ERROR
} from './actionTypes';

const initialState = {
  pending: false,
  post: [],
  error: null
}

export function postDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_DETAILS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_POST_DETAILS_SUCCESS: {
      return {
        ...state,
        pending: false,
        post: action.payload
      }
    }
    case FETCH_POST_DETAILS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}


const PostDetailsReducers = combineReducers({
  postDetailsReducer: postDetailsReducer
})

export default PostDetailsReducers;

