import { GET_CURRENT_LOCATION } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log('In the reducers getcur');
  console.log(action.payload);

  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return action.payload;
    default:
      return state;
  }
};
