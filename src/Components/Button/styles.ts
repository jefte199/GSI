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
  height: 3.5rem;
  align-items: center;
  margin-bottom: 0.25rem;
  border-radius: 0.375rem;
  justify-content: center;
  background-color: ${({ theme, type }) => backgroundColor(theme, type)};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD / 16}rem;
`;
