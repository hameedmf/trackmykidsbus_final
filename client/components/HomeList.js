import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

class HomeList extends Component {
  render() {
    const {
      regName,
      kidName,
      phone,
      regEmail,
      schoolName,
      schoolAddr,
      homeAddr
    } = this.props.user;

    return (
      <View style={styles.body}>
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 148, height: 112 }}
        />
        <Card>
          <CardSection>
            <Text style={styles.titleStyle}>
              Welcome {regName},
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              You can track your child {kidName} with this app
            </Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default HomeList;
