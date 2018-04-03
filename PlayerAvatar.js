import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import ImageAvatar from './ImageAvatar';
import { typography } from 'react-native-material-design-styles';

const PlayerAvatar = ({ playerName, photoSource, onPressImage }) => (
  <View style={styles.playerContainer}>
    <ImageAvatar
      source={photoSource}
      radius={40}
      onPress={onPressImage}
    />
    <Text style={styles.playerName}>{playerName}</Text>
  </View>
);

PlayerAvatar.propTypes = {
  playerName: PropTypes.string.isRequired,
  photoSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    // Opaque type returned by require('./image.jpg')
    PropTypes.number,
  ]).isRequired,
  onPressImage: PropTypes.func
};

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  playerName: {
    ...typography.paperFontCaption,
    textAlign: 'center',
  }
});

export default PlayerAvatar;