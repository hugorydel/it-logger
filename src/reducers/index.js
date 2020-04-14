import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  //Here is the log
  log: logReducer,
  tech: techReducer,
});
