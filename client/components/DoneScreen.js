import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner,
  Header
} from '../components/common';

export default class DoneScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          Thanks for Registering, we will send you an email with confirmation
          details
        </Text>
      </View>
    );
  }
}
