import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import AlbumReducer from './album_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  albums: AlbumReducer,
  targetUser: UserReducer
});

export default RootReducer;
