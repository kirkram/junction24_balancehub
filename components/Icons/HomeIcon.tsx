import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeIcon = ({ color, size = 24 }: { color: string; size?: number }) => {
  return <FontAwesome name="home" size={size} color={color} />;
};

export default HomeIcon;