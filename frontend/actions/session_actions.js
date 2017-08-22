import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_ERRORS,
    currentUser,
  };
};

export const signup = user => dispatch => {
  SessionApiUtil.signup(user).then(
    newUser => dispatch(receiveCurrentUser(newUser))
  );
};
