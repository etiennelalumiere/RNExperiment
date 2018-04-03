import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const resizeContainer = (radius) => {
  return {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius
  }
};

const Avatar = ({ radius, child, onPress }) => (
  <View style={[styles.buttonContainer, resizeContainer(radius)]}>
    <TouchableNativeFeedback
      onPress={onPress}
      useForeground={true}
    >
      <View style={styles.childContainer}>
        {child}
      </View>
    </TouchableNativeFeedback>
  </View>
);

Avatar.propTypes = {
  radius: PropTypes.number.isRequired,
  child: PropTypes.node.isRequired,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 3
  },
  childContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Avatar;