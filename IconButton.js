import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';

const resizeContainer = (radius) => {
  return {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius
  }
};

const IconButton = ({ iconName, radius, color, onPress }) => (
  <View style={[styles.buttonContainer, resizeContainer(radius)]}>
    <TouchableNativeFeedback
      onPress={onPress}
      useForeground={true}
    >
      <View style={styles.iconContainer}>
        <Icon
          name={iconName}
          style={{
            fontSize: radius,
            color: color
          }}
        />
      </View>
    </TouchableNativeFeedback>
  </View>
);

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: 'hidden'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default IconButton;