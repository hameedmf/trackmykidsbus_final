import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Badge } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class MainLogin extends Component {
  _driverLogin = () => {
    return Actions.driverLogin();
  };

  _parentLogin = () => {
    return Actions.auth();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            title="Parent Login"
            buttonStyle={{
              backgroundColor: '#AB7D2F',
              width: 350,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this._parentLogin}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 40
          }}
        >
          <Button
            title="Driver Login"
            buttonStyle={{
              backgroundColor: '#AB7D2F',
              width: 350,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this._driverLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4b942'
  }
});
