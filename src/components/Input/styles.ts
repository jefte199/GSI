import styled, { css } from 'styled-components/native';

import { TextInput as TextInputReactNative } from 'react-native';

export const TextInput = styled(TextInputReactNative as any)`
  flex: 1;
  height: 56px;
  border-radius: 6px;
  padding-left: 24px;
  background-color: #fff;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  border: ${({ isError }: { isError: boolean }) => {
    return isError ? '1px solid #ec4561' : 'none';
  }};
`;

export const Container = styled.View`
  width: 100%;
  position: relative;
`;
