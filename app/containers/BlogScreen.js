import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';

import { fetchPosts } from 'api';
import BlogPost from 'components/BlogPost';

export default class BlogScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Blogi',
    }
  }

  state = {
    postsDataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id,
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetchPosts()
      .then(posts => this.setState({
        postsDataSource: this.state.postsDataSource.cloneWithRows(posts)
      }))
  }

  render() {
    return (
      <ListView styles={styles.container}
        dataSource={this.state.postsDataSource}
        renderRow={data => <BlogPost
          title={data.title}
          content={data.excerpt}
          date={data.date}
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
