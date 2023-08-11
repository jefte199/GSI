import themes from '../../themes';

import { ReactNode } from 'react';

import { Text as TextReactNative, TextStyle } from 'react-native';

interface TextProps {
  size?: number;
  color?: string;
  opacity?: number;
  style?: TextStyle;
  children: ReactNode;
  weight?: '400' | '700';
}

export const Text = ({
  size,
  color,
  style,
  weight,
  opacity,
  children,
}: TextProps) => {
  const styleText = {
    ...style,
    opacity: opacity || 1,
    fontSize: size ? size : 16,
    color: color || themes.COLORS.WHITE,
    fontFamily: weight ? `Roboto-${weight}` : 'Roboto-400',
  };

  return <TextReactNative style={styleText}>{children}</TextReactNative>;
};
