import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default class DriverLoginForm extends Component {
  render() {
    return (
      <View>
        <SignInForm />
      </View>
    );
  }
}
