import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './actionTypes';


/**
 * userEmail action function
 */
export function userEmail(email) {
  return {
      type: 'REQUEST_LOGIN',
      payload: email
  }
}

/**
 * loginPending action function
 */
export function loginPending() {
    return {
        type: LOGIN_PENDING
    }
}

/**
 * loginSuccess action function
 */
export function loginSuccess(status, email) {
  console.log('loginStatus, email', status, email)
    return {
        type: LOGIN_SUCCESS,
        loginStatus: status,
        userEmail: email
    }
}

/**
 * loginError action function
 */
export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error: error
    }
}

/**
 * logins dispatch function
 */
// export function logins() {
//     return dispatch => {
//         dispatch(loginPending());
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(res => {
//             // console.log('r', res)
//             if(res.error) {
//                 throw(res.error);
//             }
//             dispatch(loginSuccess(res));
//             return res;
            
//         })
//         .catch(error => {
//             dispatch(loginError(error))
//         })
//     }
// }
