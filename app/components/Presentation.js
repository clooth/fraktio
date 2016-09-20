// External
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';

// Internal
import colors from 'constants/colors';

export default ({ title, date, presenter, content }) => {
  const companyPart = presenter.company ? ` (${presenter.company})` : null;
  const formattedDate = moment.unix(date).format('DD.MM.');
  const formattedText = content
    .replace(new RegExp('<p>', 'g'), '<span>')
    .replace(new RegExp('</p>', 'g'), '</span>');

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{formattedDate} {presenter.name}{companyPart}:</Text>
      <Text style={styles.title}>{title}</Text>
      <HTMLView value={formattedText} stylesheet={contentStyles} />
      <View style={styles.separator} />
    </View>
  )
}

const contentStyles = StyleSheet.create({
  span: {
    color: '#333'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    paddingBottom: 0
  },
  headline: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600'
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    paddingTop: 10,
    paddingBottom: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#f8f8f8',
    marginTop: 10,
    marginBottom: 0
  }
})
