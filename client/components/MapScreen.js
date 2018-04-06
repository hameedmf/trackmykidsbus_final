import React from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import Fab from '../components/Fab';
import Map from '../components/Map';
import FindDriver from '../components/FindDriver';
import { Container } from 'native-base';
import axios from 'axios';
import { findDriver, userFetch } from '../actions';
import { connect } from 'react-redux';

class MapScreen extends React.Component {
  state = { phone: '4133109010' };

  componentWillMount() {
    this.props.userFetch();
  }

  findDriver() {
    console.log('I am in findDriver1234');
    console.log(this.props.users);
    const { schoolAddr } = this.props;
    console.log(schoolAddr);

    this.props.findDriver({ schoolAddr });

    axios
      .post(
        'https://us-central1-trackmybusauth.cloudfunctions.net/fetchDriver',
        {
          phone: this.props.users
        }
      )
      .then(function(response) {
        console.log(response.data.DriverName);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

    const region = {
      latitude: 12.9226,
      longitude: 77.6174,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };

    return (
      <Container>
        <Map region={region} />
        <Fab onPressAction={this.findDriver.bind(this)} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 50,
    backgroundColor: 'white',
    elevation: 2,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  rightNav: {
    alignItems: 'center'
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 70,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabTitle: {
    fontSize: 11,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4682b4'
  }
});

const mapStateToProps = state => {
  return {
    schoolAddr: state.users.schoolAddr
  };
};

export default connect(mapStateToProps, { findDriver, userFetch })(MapScreen);
