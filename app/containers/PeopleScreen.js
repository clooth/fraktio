import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Router from 'router';

export default class PeopleScreen extends Component {
  static route = {
    navigationBar: {
      title: 'People',
    }
  }

  goBackHome = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>People Screen!</Text>
        <Text onPress={this.goBackHome}>
          Go back
        </Text>
      </View>
    )
  }
}
