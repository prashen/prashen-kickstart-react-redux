/**
 * @flow
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  increment,
  decrement,
  reset,
  fetchPosts
} from './actions';

import Home from 'components/Home'

const mapStateToProps = state => {
  console.log(state.home.posts.post.length)
  return {
    counter: state.home.count,
    error: state.home.posts.error,
    post:state.home.posts.post,
    pending: state.home.posts.pending
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  increment:increment,
  decrement: decrement,
  reset: reset,
  fetchPosts: fetchPosts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
