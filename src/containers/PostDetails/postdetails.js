/**
 * @flow
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchPostsDetails
} from './actions';

import PostDetails from 'components/PostDetails'

const mapStateToProps = state => {
  console.log(state)
  console.log(state.postDetails.postDetailsReducer.pending)
  return {
    error: state.postDetails.postDetailsReducer.error,
    postDetails:state.postDetails.postDetailsReducer.post,
    pending: state.postDetails.postDetailsReducer.pending
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPostsDetails: fetchPostsDetails
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
