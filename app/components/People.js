// External
import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

// Internal
import Person from 'components/Person';

export default ({ people }) => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      {people.map(person =>
        <Person
          key={person.id}
          firstName={person.firstName}
          lastName={person.lastName}
          nickname={person.nickname}
          title={person.title}
          image={person.photoUrl}
        />
      )}
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})
