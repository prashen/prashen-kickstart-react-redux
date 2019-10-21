/**
 * @flow
 */
import React from 'react';
import {connect} from 'react-redux';
import About from 'components/About'

const mapStateToProps = (state) => {
  console.log('About state', state)
  return {
    // counter:state.HomeReducers.count,
  }
}

export default connect(mapStateToProps)(About);
