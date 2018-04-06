import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

export default class ThankScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          Thank you for registering, we will send you a code for Login
        </Text>
      </View>
    );
  }
}
