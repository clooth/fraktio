import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import Router from 'router';

export default class PeopleScreen extends Component {
  static route = {
    navigationBar: {
      title: 'People',
    }
  }

  state = {
    people: []
  }

  componentDidMount() {
    fetch('https://fraktio.fi/wp-json/wp/v2/people')
      .then(results => results.json())
      .then(people => this.setState({ people }))
      .done()
  }

  render() {
    const { people } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
          {people.map(person =>
            <Image
              key={person.id}
              style={styles.image}
              source={{ uri: person.acf.person_photo.sizes.smallsquare }}
            />
          )}
        </ScrollView>
      </View>
    )
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
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2
  }
})
