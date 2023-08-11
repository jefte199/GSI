import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.ORANGE_100
}))``;

export const Title = styled.Text`
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.ORANGE_100};
  font-size: 24px;
  margin-top: 10px; 
  font-weight: bold;
  `;

//  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
