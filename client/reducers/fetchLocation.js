import { FETCH_LOCATION } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log('In the reducers');
  console.log(action.payload);

  switch (action.type) {
    case FETCH_LOCATION:
      return action.payload;
    default:
      return state;
  }
};
