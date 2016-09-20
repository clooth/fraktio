import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Router from 'router';

export default class PresentationsScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Perjantaipresikset'
    }
  }

  goToAbout = () => {
    this.props.navigator.push(Router.getRoute('blog'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Presentations....</Text>
        <TouchableOpacity onPress={this.goToAbout}>
          <View>
            <Text>Mene blogiin</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
