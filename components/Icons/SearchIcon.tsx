import React from 'react';
import { Image } from 'react-native';

const UserIcon = ({ color, size = 24 }: { color: string; size?: number }) => {
  return (
    <Image
      source={{ uri: 'https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/qswCD9rG1j9_YlduoJNwb6n_6r2Yfh1H/K9umCtjS1oQBQJ0MBeeCQaQY175Zkghb/9nFf9ulMyGPP7Sj0jKPDJAh_VsXGTRYh/hLu2ctHq7e8.png' }}
      style={{ width: size, height: size, tintColor: color }}
    />
  );
};

export default UserIcon;