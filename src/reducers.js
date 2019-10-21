/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import HomeReducers from 'containers/Home/reducers';
import LoginReducers from 'containers/Login/reducers';
import PostDetailsReducers from 'containers/PostDetails/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

  const reducers = combineReducers({
    home: HomeReducers,
    auth: LoginReducers,
    postDetails:PostDetailsReducers
  });

export default reducers;

