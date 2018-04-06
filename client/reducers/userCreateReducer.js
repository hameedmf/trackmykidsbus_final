import {
  USER_UPDATE,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  regName: '',
  kidName: '',
  phone: '',
  regEmail: '',
  regPassword: '',
  schoolName: '',
  schoolAddr: '',
  homeAddr: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        regName: '',
        kidName: '',
        phone: '',
        regEmail: '',
        regPassword: '',
        schoolName: '',
        schoolAddr: '',
        homeAddr: '',
        error: ''
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        regName: '',
        kidName: '',
        phone: '',
        regEmail: '',
        regPassword: '',
        schoolName: '',
        schoolAddr: '',
        homeAddr: '',
        error: 'User Already Exists - Pls Try Login'
      };
    default:
      return state;
  }
};
