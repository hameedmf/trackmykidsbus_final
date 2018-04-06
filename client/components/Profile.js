import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import ProfileList from './ProfileList';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import { connect } from 'react-redux';
import { userFetch } from '../actions';

class Profile extends Component {
  componentWillMount() {
    this.props.userFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ users }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(users);
  }

  renderRow(user) {
    return <ProfileList user={user} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const users = _.map(state.users, (val, uid) => {
    return { ...val, uid };
  });

  return { users };
};

export default connect(mapStateToProps, { userFetch })(Profile);
