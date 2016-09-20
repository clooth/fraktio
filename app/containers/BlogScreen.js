import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Router from 'router';

export default class BlogScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Blogi',
    }
  }

  goBackHome = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Meidän blogi!</Text>
        <Text onPress={this.goBackHome}>
          Mene takaisin
        </Text>
      </View>
    )
  }
}
