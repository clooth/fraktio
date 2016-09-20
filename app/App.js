import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Navigation from 'containers/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(0,0,0,.15)"
          barStyle="light-content"
         />
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
