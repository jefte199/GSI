import { TouchableOpacity } from 'react-native';

import styled, { DefaultTheme } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
  type: ButtonTypeStyleProps;
};

const backgroundColor = (theme: DefaultTheme, type: ButtonTypeStyleProps) => {
  if (type === 'PRIMARY') return theme.COLORS.GREEN_700;

  if (type === 'SECONDARY') return theme.COLORS.RED_DARK;

  return theme.COLORS.ORANGE_100;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  margin-bottom: 4px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => backgroundColor(theme, type)};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
`;
