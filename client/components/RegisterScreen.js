import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Button } from './common';
import { registerUser, createUser } from '../actions';

class RegisterScreen extends Component {
  onButtonRegister() {
    const {
      regName,
      kidName,
      phone,
      regEmail,
      regPassword,
      schoolName,
      schoolAddr,
      homeAddr
    } = this.props;

    this.props.createUser({
      regName,
      kidName,
      phone,
      regEmail,
      regPassword,
      schoolName,
      schoolAddr,
      homeAddr
    });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Parent Name"
            placeholder="Jane"
            value={this.props.regName}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'regName', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Kids Name"
            placeholder="Jane"
            value={this.props.kidName}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'kidName', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'phone', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email/Login"
            placeholder="Jane@gmail.com"
            value={this.props.regEmail}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'regEmail', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.props.regPassword}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'regPassword', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="School Name"
            placeholder="School"
            value={this.props.schoolName}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'schoolName', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="School"
            placeholder="Address"
            value={this.props.schoolAddr}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'schoolAddr', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Home"
            placeholder="Address"
            value={this.props.homeAddr}
            underlineColorAndroid="#ffffff"
            onChangeText={text =>
              this.props.registerUser({ prop: 'homeAddr', value: text })}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          <Button onPress={this.onButtonRegister.bind(this)}>Register</Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  const {
    regName,
    kidName,
    phone,
    regEmail,
    regPassword,
    schoolName,
    schoolAddr,
    homeAddr,
    error
  } = state.user;
  return {
    regName,
    kidName,
    phone,
    regEmail,
    regPassword,
    schoolName,
    schoolAddr,
    homeAddr,
    error
  };
};

export default connect(mapStateToProps, { registerUser, createUser })(
  RegisterScreen
);
