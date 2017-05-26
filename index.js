// @flow

import React from 'react';
import { Image } from 'react-native';
import * as flags from './flags';

type Props = {
  code: string,
  style?: any,
};

const Flag = ({ size = 64, code, type = 'shiny', style }: Props) => {
  const flag = flags[`icons${size}`][code];
  const unknownFlag = flags[`icons${size}`]['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
