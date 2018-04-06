import {
  DRIVER_LOGIN,
  DRIVER_PASSWORD,
  DRIVER_LOGIN_USER,
  DRIVER_LOGIN_USER_SUCCESS,
  DRIVER_LOGIN_USER_FAIL
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const driverLogin = text => {
  return {
    type: DRIVER_LOGIN,
    payload: text
  };
};

export const driverPassword = text => {
  return {
    type: DRIVER_PASSWORD,
    payload: text
  };
};

export const driverLoginUser = ({ phone, code }) => {
  return dispatch => {
    dispatch({ type: DRIVER_LOGIN_USER });

    function userLoginCheck() {
      return fetch(
        'https://us-central1-trackmybusauth.cloudfunctions.net/verifyOneTimePassword',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: phone,
            code: code
          })
        }
      )
        .then(response => driverLoginUserSuccess(dispatch, response))
        .catch(() => {
          driverLoginUserFail(dispatch);
        });
    }
    userLoginCheck();
  };
};

const driverLoginUserFail = dispatch => {
  dispatch({ type: DRIVER_LOGIN_USER_FAIL });
};

const driverLoginUserSuccess = (dispatch, response) => {
  console.log('Iam in the success');
  dispatch({ type: DRIVER_LOGIN_USER_SUCCESS, payload: response });
  Actions.driverMainScreen();
};
