import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Router from 'router';
import { primaryColor, tintColor } from 'constants/colors';
import colors from 'constants/colors';

import {
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

const defaultRouteConfig = {
  navigationBar: {
    backgroundColor: colors.primary,
    tintColor: colors.tint,
  }
}

export default class Navigation extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <TabNavigation
          id="main"
          navigatorUID="main"
          initialTab="presentations">
          <TabItem
            id="presentations"
            title="Presikset"
            selectedStyle={styles.selectedTab}>
            <StackNavigation
              id="presentations"
              defaultRouteConfig={defaultRouteConfig}
              initialRoute={Router.getRoute('presentations')}
            />
          </TabItem>

          <TabItem
            id="blog"
            title="Blogi"
            selectedStyle={styles.selectedTab}>
            <StackNavigation
              id="blog"
              defaultRouteConfig={defaultRouteConfig}
              initialRoute={Router.getRoute('blog')}
            />
          </TabItem>

          <TabItem
            id="people"
            title="Ihmiset"
            selectedStyle={styles.selectedTab}>
            <StackNavigation
              id="people"
              defaultRouteConfig={defaultRouteConfig}
              initialRoute={Router.getRoute('people')}
            />
          </TabItem>
        </TabNavigation>
      </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  selectedTab: {
    backgroundColor: '#f0f0f0',
  }
})
