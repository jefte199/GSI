import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  //background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 24px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 32;
`;

export const Line =  styled.View`
  height: 1px;
  background-color: #ddd;
  margin-horizontal: 16px;
`;

export const FlatListContainer = styled.FlatList`
  flex: 1;
  width: 100%;
  background-color: #f0f0f0;
  padding: 16px;
`;