import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Platform, View, Text, Dimensions, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

export default class Location extends Component {
  state = {
    initialLocation: {
      latitude: 12.9172,
      longitude: 77.6228,
      latitudeDelta: 0.0002,
      longitudeDelta:
        Dimensions.get('window').width /
        Dimensions.get('window').height *
        0.0002
    },
    tripStarted: false
  };

  locationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.initialLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        initialLocation: {
          ...prevState.initialLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        tripStarted: true
      };
    });
  };

  onButtonPress = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        };
        this.locationHandler(coordsEvent);
      },
      err => {
        console.log(err);
      }
    );
  };

  render() {
    let marker = null;
    if (this.state.tripStarted) {
      marker = <Mapview.Marker coordinate={this.state.initialLocation} />;
    }

    return (
      <View>
        <Card>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Start Trip</Button>
          </CardSection>
        </Card>

        <MapView
          initialRegion={this.state.initialLocation}
          style={styles.map}
          ref={ref => (this.map = ref)}
        >
          {marker}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 250
  }
});
