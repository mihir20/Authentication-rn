/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';

class App extends Component<{}> {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyA8Nwkhgd4D142V_E0aDUZQ3UcDe7wC2k8",
    authDomain: "auth-3cbc8.firebaseapp.com",
    databaseURL: "https://auth-3cbc8.firebaseio.com",
    projectId: "auth-3cbc8",
    storageBucket: "",
    messagingSenderId: "239509440223"
  });
  }
  render() {
    return (
      <View >
      <Header headerText="Authentication" />
        <Text>
          Welcome to React Native!</Text>
      </View>
    );
  }
}

export default App;
