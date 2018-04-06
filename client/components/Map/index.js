import React from 'react';
import { View } from 'native-base';
import styles from './MapStyles.js';
import { Dimensions } from 'react-native';

export const Map = ({ region }) => {
  const { width, height } = Dimensions.get('window');
  console.log(width, height);
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

  const school = {
    latitude: 12.9172,
    longitude: 77.6228,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  };

  return <View style={styles.container} />;
};

export default Map;
