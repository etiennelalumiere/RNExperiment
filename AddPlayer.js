import React, { Component } from 'react';
import { Text, Icon } from 'native-base';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { typography, color } from 'react-native-material-design-styles';

export default class AddPlayer extends Component {
  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.playerContainer}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.addPlayerContainer}>
            <Icon ios='ios-person-add' android="md-person-add" style={styles.addPlayerIcon}/>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.playerName}> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
  },
  playerName: {
    ...typography.paperFontCaption,
    textAlign: 'center',
  },
  addPlayerContainer: {
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 40,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  addPlayerIcon: {
    fontSize: 30,
    ...color.googleGrey500,
  },
});
