// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './Sections/HomeScreen';
import AboutScreen from './Sections/AboutScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
},{
        initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);
