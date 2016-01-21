import * as Types from '../actions/ActionTypes';

const initialState = {
  session_key: ""
};

export default function AuthenticationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case Types.LOGIN:
      console.log("login: " + action.session_key);
      return {
        ...state,
        session_key: action.session_key
      };
    case Types.LOGOUT:
      console.log("logout");
      return {
        ...state,
        session_key: ""
      };
    default:
      return state;
  }
}
