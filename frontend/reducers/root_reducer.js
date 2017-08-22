import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: sessionReducer
});

export default RootReducer;
