import { GET_CURRENT_LOCATION } from './types';
import firebase from 'firebase';

export const getCurrentLocation = (coordsEvent, driverId) => {
  console.log('In the getlocation');
  return dispatch => {
    dispatch({ type: GET_CURRENT_LOCATION, payload: coordsEvent });
    firebase.database().ref('drivers/' + driverId).update({
      latitude: coordsEvent.latitude,
      longitude: coordsEvent.longitude
    });
  };
};
