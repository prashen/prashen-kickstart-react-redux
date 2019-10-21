/**
 * @flow
 */
import React from 'react';
import {connect} from 'react-redux';
import Forms from 'components/Forms'

const mapStateToProps = (state) => {
  console.log('Forms state', state)
  return {
    // counter:state.HomeReducers.count,
  }
}

export default connect(mapStateToProps)(Forms);
