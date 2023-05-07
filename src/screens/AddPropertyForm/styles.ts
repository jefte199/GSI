import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const Text = styled.Text`
  width: 21%;
  margin-top: 5px;
  border: 1px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 5px 8px;
  border-radius: 5px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;