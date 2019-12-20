// Result.js
import React, { Component } from 'react';
import { Button, View, Text,Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ListItem } from 'react-native-elements';
import userData from './../js/section/data';

//estilos
import css from './../estilos/estilos' 

export default class Aboutscreen extends Component {

 static navigationOptions = {
    title: 'Resultados Redes',
   headerTintColor: '#5f5f5f',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: null,
    headerStyle: { backgroundColor: '#dcdcdc' },
  };

  render() {
  
    return (
      <View>
      {
        userData.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
             titleStyle={css.linkText}
            onPress={ ()=> Linking.openURL(l.link) } 
            bottomDivider

          />
        ))
       }
</View>
    )
  }
}