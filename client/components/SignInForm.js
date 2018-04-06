import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { driverLogin, driverPassword, driverLoginUser } from '../actions';

const ROOT_URL = 'https://us-central1-trackmybusauth.cloudfunctions.net';

class SignInForm extends Component {
  state = {
    phone: '',
    code: ''
  };

  driverLoginChanged(text) {
    this.props.driverLogin(text);
  }

  driverPasswordChanged(text) {
    this.props.driverPassword(text);
  }

  handleSubmit() {
    const { phone, code } = this.props;
    this.props.driverLoginUser({ phone, code });
  }

  handleSubmit2 = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.props.phone,
        code: this.props.code
      });
      console.log(data.token);
      Actions.driverMainScreen();
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit1 = () => {
    try {
      axios
        .post(`${ROOT_URL}/verifyOneTimePassword`, {
          phone: this.state.phone,
          code: this.state.code
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
    } catch (err) {
      console.log('In this error2');
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginTop: 50 }}>
          <Card>
            <CardSection>
              <Input
                placeholder="Enter Phone"
                label="Enter Phone"
                underlineColorAndroid="#ffffff"
                value={this.props.phone}
                onChangeText={this.driverLoginChanged.bind(this)}
                underlineColorAndroid="#ffffff"
              />
            </CardSection>
          </Card>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Card>
            <CardSection>
              <Input
                placeholder="Enter code"
                label="Enter Code"
                underlineColorAndroid="#ffffff"
                value={this.props.code}
                onChangeText={this.driverPasswordChanged.bind(this)}
              />
            </CardSection>
            <CardSection>
              <Button onPress={this.handleSubmit.bind(this)}>Login</Button>
            </CardSection>
          </Card>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    phone: state.driver.phone,
    code: state.driver.code
  };
};

export default connect(mapStateToProps, {
  driverLogin,
  driverPassword,
  driverLoginUser
})(SignInForm);
