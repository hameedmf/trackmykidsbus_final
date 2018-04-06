import React from 'react';
import { Ionicons } from 'react-native-vector-icons/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 320,
    height: 320
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'School Bus Tracker',
    text:
      'Welcome to our School Bus Tracker!!! \nBuilt by Parent(s) for Parent(s) ',
    image: require('./assets/1.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab'
  },
  {
    key: 'somethun1',
    title: 'Simple and Secure',
    text:
      'Simple, safe and secure way for you to check in\n "almost" real time to see where your child\'s bus is located.',
    image: require('./assets/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab'
  },
  {
    key: 'somethun2',
    title: 'Smiling Parents',
    text:
      "Now you can Keep Smiling. \nOur bus tracker app will allow you to view the bus route, scheduled stops, the location of the bus along the route, and your child's scheduled arrival time.",
    image: require('./assets/3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab'
  }
];

export default class App extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  _done = () => {
    return setTimeout(function() {
      Actions.login();
    }, 4000);
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
          onPress={this._done()}
        />
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    );
  }
}
