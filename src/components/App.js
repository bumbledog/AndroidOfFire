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
<<<<<<< HEAD
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';

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
=======
import { 
  Container,
   Header,
    Content,
     Button,
      Icon,
       Text 
      } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class App extends Component {
  render() {
    return (
      <RootTab/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
});
>>>>>>> 856e368ae92e659537ac00722eb7ee54d2ce9565
