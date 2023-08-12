import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
