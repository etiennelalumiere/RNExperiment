import React, { Component } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'native-base';
import Avatar from './Avatar';
import IconAvatar from './IconAvatar';
import { typography, color } from 'react-native-material-design-styles';
import Players from "./Players";

export default class TestScreen extends Component {

  static navigationOptions = {
    title: 'Test',
  };

  render() {
    const players = [
      {
        id: 0,
        name: 'Etienne',
        photoSource: require('./assets/images/P_20180325_141424.jpg')
      },
      {
        id: 1,
        name: 'Alexis',
        photoSource: require('./assets/images/P_20180325_141449_BF.jpg')
      },
      {
        id: 2,
        name: 'Simon',
        photoSource: require('./assets/images/P_20180325_141431.jpg')
      },
      {
        id: 3,
        name: 'Etienne',
        photoSource: require('./assets/images/P_20180325_141424.jpg')
      },
      {
        id: 4,
        name: 'Alexis',
        photoSource: require('./assets/images/P_20180325_141449_BF.jpg')
      },
      {
        id: 5,
        name: 'Simon',
        photoSource: require('./assets/images/P_20180325_141431.jpg')
      },
    ];

    return (
      <View style={styles.container}>
        <Players
          players={players}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPlayerIcon: {
    fontSize: 30,
    ...color.googleGrey500,
  },
});