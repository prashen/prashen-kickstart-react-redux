import { 
  FETCH_POST_DETAILS_PENDING,
  FETCH_POST_DETAILS_SUCCESS,
  FETCH_POST_DETAILS_ERROR
} from './actionTypes';


/**
 * fetchPostPending action function
 */
export function fetchPostDetailsPending() {
    return {
        type: FETCH_POST_DETAILS_PENDING
    }
}

/**
 * fetchPostSuccess action function
 */
export function fetchPostDetailsSuccess(post) {
    return {
        type: FETCH_POST_DETAILS_SUCCESS,
        payload: post
    }
}

/**
 * fetchPostError action function
 */
export function fetchPostDetailsError(error) {
    return {
        type: FETCH_POST_DETAILS_ERROR,
        error: error
    }
}


export function fetchPostsDetails(ID) {
    console.log(ID)
    return dispatch => {
        dispatch(fetchPostDetailsPending());
        fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
        .then(res => res.json())
        .then(res => {
            console.log('r', res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPostDetailsSuccess(res));
            return res;
            
        })
        .catch(error => {
            dispatch(fetchPostDetailsError(error))
        })
    }
  }
