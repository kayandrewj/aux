import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionReducer = (state = { currentUser: null, errors: []}, action) => {

  const nullUser = Object.freeze({
    currentUser: null,
    errors: [],
  });

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, nullUser, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, nullUser, { errors: action.errors } );
    case CLEAR_ERRORS:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
