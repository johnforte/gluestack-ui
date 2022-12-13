import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: { bg: '$red.500', borderRadius: 999 },
      // descendants: {
      //   _progressbar: {
      //     h: '$3',
      //   },
      // },
    },
  },
  {}
);
