import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

import { fetchPeople } from 'api';
import Router from 'router';
import People from 'components/People';

export default class PeopleScreen extends Component {
  static route = {
    navigationBar: {
      title: 'People',
    }
  }

  state = {
    people: [],
  }

  componentDidMount() {
    fetchPeople()
      .then(people => this.setState({ people }))
  }

  render() {
    return <People people={this.state.people} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
