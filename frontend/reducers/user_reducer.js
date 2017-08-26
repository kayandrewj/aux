import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, { targetUser: action.targetUser});
    default:
      return state;
  }

};

export default UserReducer;
