/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

const POSTS_URL = 'https://fraktio.fi/wp-json/wp/v2/posts';

class Fraktio extends Component {
  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    });

    this.state = {
      dataSource
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(POSTS_URL)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJSON)
        })
      })
      .done()
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data.title.rendered}</Text></View>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
  },
});

AppRegistry.registerComponent('Fraktio', () => Fraktio);
