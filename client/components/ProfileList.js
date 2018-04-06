import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

class ProfileList extends Component {
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
      <View>
        <Card>
          <CardSection>
            <Text style={styles.titleStyle}>
              Parent Name: {regName}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              Child Name: {kidName}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              Phone: {phone}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              Email: {regEmail}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              School Name: {schoolName}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              School Addr : {schoolAddr}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              Home Addr : {homeAddr}
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
  }
};

export default ProfileList;
