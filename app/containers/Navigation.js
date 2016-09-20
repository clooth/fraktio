// External
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Internal
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
            selectedStyle={styles.selectedTab}
            renderIcon={selected =>
              <Icon
                name={selected ? 'ios-videocam' : 'ios-videocam-outline'}
                size={18}
                color={selected ? colors.primary : '#222'}
              />
            }
          >
            <StackNavigation
              id="presentations"
              defaultRouteConfig={defaultRouteConfig}
              initialRoute={Router.getRoute('presentations')}
            />
          </TabItem>

          <TabItem
            id="blog"
            title="Blogi"
            selectedStyle={styles.selectedTab}
            renderIcon={selected =>
              <Icon
                name={selected ? 'ios-paper' : 'ios-paper-outline'}
                size={18}
                color={selected ? colors.primary : '#222'}
              />
            }
          >
            <StackNavigation
              id="blog"
              defaultRouteConfig={defaultRouteConfig}
              initialRoute={Router.getRoute('blog')}
            />
          </TabItem>

          <TabItem
            id="people"
            title="Ihmiset"
            selectedStyle={styles.selectedTab}
            renderIcon={selected =>
              <Icon
                name={selected ? 'ios-body' : 'ios-body-outline'}
                size={18}
                color={selected ? colors.primary : '#222'}
              />
            }
          >
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
    backgroundColor: '#f8f8f8'
  }
})
