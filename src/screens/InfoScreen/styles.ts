import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const TagText = styled.Text`
  width: 24%;
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
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;