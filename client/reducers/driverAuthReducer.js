import {
  DRIVER_LOGIN,
  DRIVER_PASSWORD,
  DRIVER_LOGIN_USER,
  DRIVER_LOGIN_USER_SUCCESS,
  DRIVER_LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  phone: '',
  code: '',
  response: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('iam in the reducer', action.payload);
  switch (action.type) {
    case DRIVER_LOGIN:
      return { ...state, phone: action.payload };
    case DRIVER_PASSWORD:
      return { ...state, code: action.payload };
    case DRIVER_LOGIN_USER:
      return { ...state, error: '' };
    case DRIVER_LOGIN_USER_SUCCESS:
      return {
        ...state,
        response: action.payload
      };
    case DRIVER_LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed!!' };
    default:
      return state;
  }
};
