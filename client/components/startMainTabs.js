import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LocationScreen from './Location';
import UploadScreen from './Upload';
import DriverHomeScreen from './DriverHome';

export default TabNavigator(
  {
    Home: { screen: DriverHomeScreen },
    Locate: { screen: LocationScreen },
    Upload: { screen: UploadScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Locate') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Upload') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
