import React, { Component } from 'react';
import { Thumbnail, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { typography } from 'react-native-material-design-styles';

export default class Player extends Component {
  render() {
    const { name, source } = this.props;

    return (
      <View style={styles.playerContainer}>
        <View style={styles.thumbnailContainer}>
          <Thumbnail large source={source} />
        </View>
        <Text style={styles.playerName}>{name}</Text>
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
  thumbnailContainer: {
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 40,
    margin: 5,
  }
});
