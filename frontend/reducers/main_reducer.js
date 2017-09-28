import merge from 'lodash/merge';
import { RECEIVE_FEATURED_ALBUMS } from '../actions/main_actions';

const MainReducer = (state = {}, action) => {

  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_FEATURED_ALBUMS:
      let newState = merge({}, state);
      if (newState.features) {
        newState.features = {};
      }
      return merge({}, newState, {features: action.albums});
    default:
      return state;
  }
};

export default MainReducer;
