import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchLocation, getCurrentLocation, driverLogin } from '../actions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.334548531;
const LONGITUDE = -122.036233223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCOV3qPaW7qQMUV50JLBsli3LviggtR1Js';

const busMarker = require('./assets/bus.png');

class ParentView extends Component {
  componentWillMount() {
    this.props.fetchLocation(this.props.driverPhone);
  }

  componentWillUnmount() {
    console.log('Iam in unmount');
    navigator.geolocation.clearWatch(this.watchId);
  }

  state = {
    coordinates: [
      {
        latitude: '',
        longitude: ''
      },
      {
        latitude: '',
        longitude: ''
      }
    ],
    tripStarted: false
  };

  getCurLoc = () => {
    let tripStarted = true;
    console.log('Iam in start trip');

    this.watchId = navigator.geolocation.watchPosition(
      pos => {
        const coordsEvent = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
        this.props.getCurrentLocation(coordsEvent, this.props.driverPhone);
      },
      err => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  };

  endTrip = () => {
    console.log('Iam in endtrip');
    navigator.geolocation.clearWatch(this.watchId);
  };

  render() {
    mapView = null;

    let coordinates = [
      {
        latitude: this.props.homelat,
        longitude: this.props.homelong
      },
      {
        latitude: this.props.schoollat,
        longitude: this.props.schoollong
      }
    ];

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: this.props.homelat || LATITUDE,
            longitude: this.props.homelong || LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          style={styles.map}
          ref={c => (this.mapView = c)}

          //onPress={this.onMapPress}
        >
          {coordinates.map((coordinate, index) =>
            <MapView.Marker
              key={`coordinate_${index}`}
              coordinate={coordinate}
            />
          )}
          {coordinates.length >= 2 &&
            <MapViewDirections
              style={styles.map}
              origin={coordinates[0]}
              waypoints={
                coordinates.length > 2 ? coordinates.slice(1, -1) : null
              }
              destination={coordinates[coordinates.length - 1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
              onStart={params => {
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`
                );
              }}
              onReady={result => {
                if (Platform.OS === 'ios') {
                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: width / 20,
                      bottom: height / 20,
                      left: width / 20,
                      top: height / 20
                    }
                  });
                } else {
                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: parseInt(width / 20),
                      bottom: parseInt(height / 20),
                      left: parseInt(width / 20),
                      top: parseInt(height / 20)
                    }
                  });
                }
              }}
              onError={errorMessage => {
                console.log('GOT AN ERROR');
                console.log(errorMessage);
              }}
            />}

          <MapView.Marker
            coordinate={{
              latitude: coordinates[0].latitude || LATITUDE,
              longitude: coordinates[0].longitude || LONGITUDE
            }}
            image={busMarker}
          />
        </MapView>
        <Button
          onPress={this.getCurLoc.bind(this)}
          title="Begin Trip"
          buttonStyle={{
            backgroundColor: '#AB7D2F',
            width: 350,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5
          }}
        />

        <Text>
          Latitude:{this.props.homelat}
        </Text>
        <Text>
          Longitude:{this.props.homelong}
        </Text>
        <Text>
          CurLatitude:{this.props.curLatitude}
        </Text>
        <Text>
          CurLongitude:{this.props.curLongitude}
        </Text>
        <Button
          onPress={this.endTrip.bind(this)}
          title="End Trip"
          buttonStyle={{
            backgroundColor: '#AB7D2F',
            width: 350,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 350
  },
  container: {
    width: '100%',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    fetchLatitude: state.fetch.latitude,
    fetchLongitude: state.fetch.longitude,
    homelat: state.fetch.Homelat,
    homelong: state.fetch.Homelong,
    schoollat: state.fetch.Schoollat,
    schoollong: state.fetch.Schoollong,
    curLatitude: state.getLoc.latitude,
    curLongitude: state.getLoc.longitude,
    driverPhone: state.driver.phone
  };
};

export default connect(mapStateToProps, {
  fetchLocation,
  getCurrentLocation,
  driverLogin
})(ParentView);
