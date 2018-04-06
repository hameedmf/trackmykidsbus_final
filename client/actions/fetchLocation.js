import { FETCH_LOCATION } from './types';
import firebase from 'firebase';

export const fetchLocation = driverId => {
  return dispatch => {
    firebase.database().ref('drivers/' + driverId).on('value', snapshot => {
      dispatch({ type: FETCH_LOCATION, payload: snapshot.val() });
    });
  };
};
