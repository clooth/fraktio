// External
import React, { Component } from 'react'
import moment from 'moment';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

// Internal
import colors from 'constants/colors';
import HTMLView from 'react-native-htmlview';

moment.locale('fi');

export default class BlogPostFull extends Component {
  static route = {
    navigationBar: {
      title(params) {
        return params.title
      },
    }
  }

  render() {
    const { title, date, content } = this.props;
    const formattedDate = moment(date).format('LL');

    const formattedText = content
      .replace(new RegExp('<p>', 'g'), '<span>')
      .replace(new RegExp('</p>', 'g'), '</span>');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.titleDate}>{formattedDate}</Text>
        </View>
        <HTMLView stylesheet={contentStyles} value={formattedText} />
      </ScrollView>
    )
  }
}

const contentStyles = StyleSheet.create({
  a: {
    color: colors.primary,
  }
})

const styles = StyleSheet.create({
  container: {
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
});
