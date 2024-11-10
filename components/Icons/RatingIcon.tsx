import React from 'react';
import { Image } from 'react-native';

const RatingIcon = ({ color, size = 26 }: { color: string; size?: number }) => {
  return (
    <Image
      source={{ uri: 'https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/H6_VsXuwMDb-vIsV2nxvKkawfRUEH3v6/fDSeiAVjRC7rJlN5IjZ82uZyfOLOtBrB/ialsuFuQS_Br7TMjpagF2QTeeFayfyeU/vp3HstaOMiA.png' }}
      style={{ width: size, height: size, tintColor: color }}
    />
  );
};

export default RatingIcon;