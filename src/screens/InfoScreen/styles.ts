import styled from 'styled-components/native';

import { backgroundColor } from '../../components/Button/styles';

type Props = { type: StyleProps };

export type StyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px 24px 0 24px;
`;

export const ContainerImage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonShareImage = styled.TouchableOpacity`
  top: 10px;
  right: 10px;
  position: absolute;
`;

export const ContainerTag = styled.View`
  margin-top: 16px;
`;

export const ContainerPrice = styled.View`
  gap: 6px;
  margin-top: 16px;
  align-items: center;
  flex-direction: row;
`;

export const TagText = styled.Text<Props>`
  margin-top: 5px;
  padding: 5px 8px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  background-color: ${({ theme, type }) => backgroundColor(theme, type)};
`;

export const ContainerDescription = styled.View`
  margin-top: 16px;
  margin-bottom: 24px;
`;
