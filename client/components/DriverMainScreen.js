import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DriverHomeTab from './startMainTabs';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner,
  Header
} from '../components/common';

export default class DriverMainScreen extends Component {
  render() {
    return <DriverHomeTab />;
  }
}
