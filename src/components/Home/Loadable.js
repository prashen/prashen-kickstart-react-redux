import React from 'react';
import loadable from '../../utils/loadable';
// import LoadingIndicator from 'components/LoadingIndicator';

/**
 * 
 */
export default loadable(() => import('./index'), {
  fallback:<h1>Home loading...</h1>,
});
