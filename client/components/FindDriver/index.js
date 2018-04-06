import React from 'react';
import { Text } from 'react-native';
import { View, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './FindDriverStyles.js';

export const FindDriver = ({ schoolAddr }) => {
  console.log('Iam in findDriver2');

  return (
    <View style={styles.findDriverContainer}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Processing your request - Finding the Driver
        </Text>
        <Icon style={styles.locationIcon} name="map-marker" />

        <View style={styles.pickup}>
          <Text>
            {schoolAddr}
          </Text>
        </View>
        <Icon style={styles.toArrow} name="long-arrow-down" />
        <View style={styles.dropoff}>
          <Text>
            {schoolAddr}
          </Text>
        </View>

        <View>
          <Text style={styles.termsText}>
            By booking you confirm that you accept our T & C
          </Text>
          <Button style={styles.cancelBtn}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default FindDriver;
