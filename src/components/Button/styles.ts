import { TouchableOpacity } from 'react-native';

import styled, { DefaultTheme } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = { type: ButtonTypeStyleProps };

export const backgroundColor = (
  theme: DefaultTheme,
  type: ButtonTypeStyleProps
) => {
  const colors = {
    PRIMARY: theme.COLORS.GREEN_700,
    SECONDARY: theme.COLORS.RED_DARK,
    TERTIARY: theme.COLORS.ORANGE_100,
  };

  return colors[type];
};

export const Container = styled(TouchableOpacity as any)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  margin-bottom: 4px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => backgroundColor(theme, type)};
`;
