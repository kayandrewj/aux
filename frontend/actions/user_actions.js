import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (targetUser) => {
  return {
    type: RECEIVE_USER,
    targetUser
  };
};

export const fetchUser = userId => dispatch => {
  UserApiUtil.fetchUser(userId).then(
    targetUser => dispatch(receiveUser(targetUser))
  );
};
