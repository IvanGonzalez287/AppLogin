// Login.js
import React, { Component } from 'react';

import { StyleSheet, Button, View, Text,TextInput,NativeModules,TouchableOpacity   } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//estilos
import css from './../estilos/estilos' 




export default class Homescreen extends Component {
  static navigationOptions = {
    title: 'Login',
   headerTintColor: '#5f5f5f',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: null,
    headerStyle: { backgroundColor: '#dcdcdc' },
  };



  render() {
     
    return (

 <View style={css.container}>
  <Text
  style={css.Titular}>Welcome to the Login File</Text>
        <TextInput
        style={css.TextInput}
         placeholder="User Name"
        />

        <TextInput
        style={css.TextInput}
         placeholder="password"
        />

        <TouchableOpacity
             style={css.button}
              onPress={() => this.props.navigation.navigate('Result')}>
            <Text  style={css.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>

    )
  }
}



