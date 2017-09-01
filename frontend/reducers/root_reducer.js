import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import AlbumReducer from './album_reducer';
import UserReducer from './user_reducer';
import TrackReducer from './track_reducer';
import SearchReducer from './search_reducer';
import MainReducer from './main_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  albums: AlbumReducer,
  targetUser: UserReducer,
  tracks: TrackReducer,
  search: SearchReducer,
  main: MainReducer,
});

export default RootReducer;
