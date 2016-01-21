import * as Types from './ActionTypes';

export function login(session_key) {
  return {
    type: Types.LOGIN,
    session_key: session_key
  };
}

export function logout() {
  return {
    type: Types.LOGOUT
  };
}
