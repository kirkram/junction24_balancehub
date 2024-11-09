import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AiIcon = ({ color, size = 24 }: { color: string; size?: number }) => {
  return <FontAwesome5 name="robot" size={size} color={color} />;
};

export default AiIcon;