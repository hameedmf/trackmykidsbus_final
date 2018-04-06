import { Actions } from 'react-native-router-flux';
import {
  USER_UPDATE,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  USER_FETCH_SUCCESS
} from './types';
import firebase from 'firebase';

export const registerUser = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: { prop, value }
  };
};

export const createUser = ({
  regName,
  kidName,
  phone,
  regEmail,
  regPassword,
  schoolName,
  schoolAddr,
  homeAddr
}) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(regEmail, regPassword)
      .then(user =>
        createUserSuccess(
          dispatch,
          user,
          regName,
          kidName,
          phone,
          regEmail,
          regPassword,
          schoolName,
          schoolAddr,
          homeAddr
        )
      )
      .catch(() => {
        createUserFail(dispatch);
      });
  };
};

const createUserFail = dispatch => {
  dispatch({ type: CREATE_USER_FAIL });
};

const createUserSuccess = (
  dispatch,
  user,
  regName,
  kidName,
  phone,
  regEmail,
  regPassword,
  schoolName,
  schoolAddr,
  homeAddr
) => {
  dispatch({ type: CREATE_USER_SUCCESS, payload: user });
  firebase.database().ref(`/users/${user.uid}/student`).push({
    regName,
    kidName,
    phone,
    regEmail,
    regPassword,
    schoolName,
    schoolAddr,
    homeAddr
  });
  Actions.done();
};

export const userFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/student`)
      .on('value', snapshot => {
        dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const findDriver = ({ schoolAddr }) => {
  console.log('Iam in findDriver action');
  console.log(schoolAddr);
  return dispatch => {
    fetch('https://us-central1-trackmybusauth.cloudfunctions.net/fetchDriver');
    Actions.findDriver(schoolAddr);
  };
};
