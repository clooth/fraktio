import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

import colors from 'constants/colors';
import HTMLView from 'react-native-htmlview';

moment.locale('fi');

export default ({ title, date, content }) => {
  const formattedDate = moment(date).format('LL');

  const formattedText = content
    .replace(new RegExp('<p>', 'g'), '<span>')
    .replace(new RegExp('</p>', 'g'), '</span>');

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleDate}>{formattedDate}</Text>
      </View>
      <HTMLView style={styles.content} value={formattedText} />
      <View style={styles.separator} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    paddingBottom: 0
  },

  title: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },

  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    flex: 2,
  },

  titleDate: {
    fontSize: 12,
    color: '#aaa',
    flex: 1,
    textAlign: 'right'
  },

  separator: {
    height: 1,
    backgroundColor: '#f8f8f8',
    marginTop: 10,
    marginBottom: 10
  }
});
