import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const ImageAvatar = ({ source, radius, onPress }) => (
  <Avatar
    radius={radius}
    child={<Image
      source={source}
      style={{
        height: radius * 2,
        width: radius * 2,
        borderRadius: radius
      }}
    />}
  />
);

ImageAvatar.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    // Opaque type returned by require('./image.jpg')
    PropTypes.number,
  ]).isRequired,
  radius: PropTypes.number.isRequired,
  onPress: PropTypes.func
};

export default ImageAvatar;