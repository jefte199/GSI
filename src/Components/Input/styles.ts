import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;
  padding-left: 24px;

  background-color: #fff;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
`;
  