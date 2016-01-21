'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import SessionView from '../components/SessionView';
import * as AuthenticationActions from '../actions/AuthenticationActions';
import { connect } from 'react-redux';

class LoginApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    let session_key = state && state.session_key ? state.session_key : ""

    console.log("render loginApp");

    return (
      <SessionView
        session_key={session_key}
        {...bindActionCreators(AuthenticationActions, dispatch)} />
    );
  }
}

export default connect(state => ({
  state: state.AuthenticationReducer // reducer
}))(LoginApp);
