import React, { Component } from 'react';

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
