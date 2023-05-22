import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type StyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
  type: StyleProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const ContainerTags = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const TagText = styled.Text<Props>`
  margin-top: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : type === 'SECONDARY' ? theme.COLORS.RED_DARK : theme.COLORS.ORANGE_100};
  padding: 5px 8px;
  border-radius: 5px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;