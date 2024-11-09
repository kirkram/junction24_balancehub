import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UserIcon = ({ color, size = 24 }: { color: string; size?: number }) => {
  return <FontAwesome name="user" size={size} color={color} />;
};

export default UserIcon;