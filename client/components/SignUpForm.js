import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

const ROOT_URL = 'https://us-central1-trackmybusauth.cloudfunctions.net';

class SignUpForm extends Component {
  state = {
    phone: ''
  };

  // will rewrite the below code in async await
  handleSubmit1 = () => {
    axios
      .post(`${ROOT_URL}/createUser`, {
        phone: this.state.phone
      })
      .then(() => {
        axios.post(`${ROOT_URL}/requestOneTimePassword`, {
          phone: this.state.phone
        });
      });
  };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createDriver`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone
      });
      Actions.thankScreen();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button
          onPress={this.handleSubmit}
          title="Register"
          backgroundColor="#AB7D2F"
        />
      </View>
    );
  }
}

export default SignUpForm;
