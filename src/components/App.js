/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import SleepingPikachu from './SleepingPikachu';

const Root = StackNavigator({
    MainScreen: {
        screen: MainScreen
    },

    SleepingPikachu: {
        screen: SleepingPikachu
    },
},
    {
      initialRouteName: 'MainScreen',
      mode: 'modal',
    }
);

export default class App extends Component {
  render() {
    return (
      <Root
        screenProps={{
          val1: "value1",
          val2: "value2"
        }}
      />
    );
  }
}
