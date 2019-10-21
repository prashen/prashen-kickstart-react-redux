import { 
  INCREMENT, 
  DECREMENT, 
  RESET,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR
} from './actionTypes';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function reset() {
  return { type: RESET };
}


/**
 * fetchPostPending action function
 */
export function fetchPostPending() {
    return {
        type: FETCH_POST_PENDING
    }
}

/**
 * fetchPostSuccess action function
 */
export function fetchPostSuccess(post) {
    return {
        type: FETCH_POST_SUCCESS,
        payload: post
    }
}

/**
 * fetchPostError action function
 */
export function fetchPostError(error) {
    return {
        type: FETCH_POST_ERROR,
        error: error
    }
}

/**
 * fetchPosts dispatch function
 */
export function fetchPosts() {
    return (dispatch, getState) => {
      console.log(getState().home.posts.post.length)
      if(getState().home.posts.post.length === 0){
        dispatch(fetchPostPending());
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(res => res.json())
        .then(res => {
            console.log('r', res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPostSuccess(res));
            return res;
            
        })
        .catch(error => {
            dispatch(fetchPostError(error))
        })
      }
        
    }
}


