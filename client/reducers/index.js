import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userCreateReducer from './userCreateReducer';
import userReducer from './userReducer';
import fetchLocation from './fetchLocation';
import gerCurLocation from './getCurLocation';
import driverAuthReducer from './driverAuthReducer';

export default combineReducers({
  auth: authReducer,
  user: userCreateReducer,
  users: userReducer,
  fetch: fetchLocation,
  getLoc: gerCurLocation,
  driver: driverAuthReducer
});
