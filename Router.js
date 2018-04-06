import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import DriverLoginForm from './client/components/DriverLoginForm';
import DriverMainScreen from './client/components/DriverMainScreen';
import ThankScreen from './client/components/ThankScreen';
import WelcomeScreen from './client/components/WelcomeScreen';
import MainLogin from './client/components/MainLogin';
import LoginForm from './client/components/LoginForm';
import RegisterScreen from './client/components/RegisterScreen';
import MainScreen from './client/components/MainScreen';
import ProfileList from './client/components/ProfileList';
import DoneScreen from './client/components/DoneScreen';
import FindDriver from './client/components/FindDriver';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{
        backgroundColor: '#AB7D2F',
        height: 100
      }}
      titleStyle={styles.navTitle}
    >
      <Scene key="root" hideNavBar>
        <Scene key="welcome" hideNavBar>
          <Scene key="welcomeSlide" component={WelcomeScreen} />
          <Scene key="mainLogin" component={MainLogin} />
        </Scene>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
          <Scene
            key="register"
            component={RegisterScreen}
            title="Please Register"
          />
        </Scene>

        <Scene key="driverAuth" initial>
          <Scene
            key="driverLogin"
            component={DriverLoginForm}
            title="Driver App - Register"
          />
          <Scene key="thankScreen" component={ThankScreen} title="Thank You" />
        </Scene>

        <Scene key="main">
          <Scene
            key="mainScreen"
            component={MainScreen}
            title="School Bus Tracker App"
          />
          <Scene
            key="profileList"
            component={ProfileList}
            title="ProfileList"
          />
        </Scene>

        <Scene key="driverMain">
          <Scene
            key="driverMainScreen"
            component={DriverMainScreen}
            title="Driver App"
          />
        </Scene>

        <Scene key="done">
          <Scene key="doneScreen" component={DoneScreen} title="Thanks" />
        </Scene>
        <Scene key="findDriver">
          <Scene
            key="findDriverScreen"
            component={FindDriver}
            title="findDriver"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  navTitle: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

export default RouterComponent;
