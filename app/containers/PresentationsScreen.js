// External
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ListView
} from 'react-native';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';

// Internal
import Router from 'router';
import { fetchPresentations } from 'api';
import Presentation from 'components/Presentation';

export default class PresentationsScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Perjantaipresikset'
    }
  }

    state = {
      presentationsDataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.id !== r2.id,
      })
    }

    componentDidMount() {
      this.fetchData()
    }

    fetchData() {
      fetchPresentations()
        .then(presentations => reverse(sortBy(presentations, 'date')))
        .then(presentations => this.setState({
          presentationsDataSource: this.state.presentationsDataSource.cloneWithRows(presentations)
        }))
    }

  render() {
    return (
      <ListView styles={styles.container}
        dataSource={this.state.presentationsDataSource}
        renderRow={data => <Presentation
          title={data.title}
          content={data.content}
          date={data.date}
          presenter={data.presenter}
          video_id={data.video_id}
        />}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})
