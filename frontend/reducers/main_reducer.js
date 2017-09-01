import merge from 'lodash/merge';
import { RECEIVE_FEATURED_ALBUMS } from '../actions/main_actions';

const MainReducer = (state = {}, action) => {

  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_FEATURED_ALBUMS:
      let newState = merge({}, state);
      if (newState.featuredAlbums) {
        newState.featuredAlbums = {};
      }
      return merge({}, newState, action.albums.features);
    default:
      return state;
  }
};

export default MainReducer;