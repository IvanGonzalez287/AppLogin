// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LoginScreen from './Sections/Login';
import ResultScreen from './Sections/Result';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  
  Login: {
    screen: LoginScreen
  },
  Result: {
    screen: ResultScreen
  }
},{
        initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);
