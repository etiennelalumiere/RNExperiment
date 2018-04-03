import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import { Icon } from 'native-base';

const IconAvatar = ({ iconName, radius, color = '#000', onPress }) => (
  <Avatar
    radius={radius}
    child={<Icon
      name={iconName}
      style={{
        fontSize: radius,
        color: color
      }}
    />}
  />
);

IconAvatar.propTypes = {
  iconName: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func
};

export default IconAvatar;