import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
  border: 1px;
  font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 16px;
  `;