import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16
  },
  title: {
    fontSize: 32,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'School Bus Tracker',
    text:
      'Welcome to our School Bus Tracker!!! \nBuilt by Parent(s) for Parent(s) ',
    icon: 'ios-bus-outline',
    colors: ['#f49542', '#f4b942']
  },
  {
    key: 'somethun1',
    title: 'Simple and Secure',
    text:
      'Simple, safe and secure way for you to check in\n "almost" real time to see where your child\'s bus is located.',
    icon: 'ios-options-outline',
    colors: ['#f49542', '#f4b942']
  },
  {
    key: 'somethun2',
    title: 'Smiling Parents',
    text:
      "Now you can Keep Smiling. \nOur bus tracker app will allow you to view the bus route, scheduled stops, the location of the bus along the route, and your child's scheduled arrival time.",
    icon: 'ios-happy-outline',
    colors: ['#f49542', '#f4b942']
  }
];

export default class App extends React.Component {
  _renderItem = props =>
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height
        }
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <Ionicons
        style={{ backgroundColor: 'transparent' }}
        name={props.icon}
        size={200}
        color="white"
      />
      <View>
        <Text style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.text}>
          {props.text}
        </Text>
      </View>
    </LinearGradient>;

  _onDone = () => {
    return Actions.mainLogin();
  };

  _onSkip = () => {
    return Actions.mainLogin();
  };

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
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        showSkipButton
        onSkip={this._onSkip}
        onDone={this._onDone}
      />
    );
  }
}
