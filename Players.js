import React from 'react';
import {
  View,
  ScrollView,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon,  Button } from 'native-base';
import { color } from 'react-native-material-design-styles';
import PlayerAvatar from './PlayerAvatar';
import IconButton from './IconButton';

const Players = ({ players, onPressPlayer, onPressAdd }) => (
  <View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {players.map(player => (
        <View key={player.id} style={styles.listItemContainer}>
          <PlayerAvatar
            playerName={player.name}
            photoSource={player.photoSource}
          />
        </View>
      ))}
      <View style={styles.addIconContainer}>
        <IconButton iconName={'md-add'} radius={30}/>
      </View>
    </ScrollView>
  </View>
);

Players.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photoSource: PropTypes.oneOfType([
        PropTypes.shape({
          uri: PropTypes.string,
        }),
        // Opaque type returned by require('./image.jpg')
        PropTypes.number,
      ])
    })
  ),
  onPressPlayer: PropTypes.func,
  onPressAdd: PropTypes.func
};

const styles = StyleSheet.create({
  listItemContainer: {
    margin: 10
  },
  addIconContainer: {
    flex: 1,
    width: 80,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Players;