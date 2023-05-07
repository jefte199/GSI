import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const StyledIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.ORANGE_100
}))``;

export const Number = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;

