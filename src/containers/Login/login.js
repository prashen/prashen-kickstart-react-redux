/**
 * @flow
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loginPending,
  loginSuccess,
  loginError
} from './actions';

import Login from 'components/Login'

const mapStateToProps = state => {
  console.log(state)
  return {
    auth:state.auth
    // counter: state.home.count,
    // error: state.home.posts.error,
    // post:state.home.posts.post,
    // pending: state.home.posts.pending
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginSuccess:loginSuccess,
  // decrement: decrement,
  // reset: reset,
  // fetchPosts: fetchPosts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

// export default Login;
