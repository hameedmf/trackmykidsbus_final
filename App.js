import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './client/reducers';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBcvFXwfmaCfgS3TbLgTSHpKx1sSh50GF0',
      authDomain: 'trackmybusauth.firebaseapp.com',
      databaseURL: 'https://trackmybusauth.firebaseio.com',
      projectId: 'trackmybusauth',
      storageBucket: 'trackmybusauth.appspot.com',
      messagingSenderId: '1068961501038'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
