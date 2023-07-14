import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 8px;
  background-color: #fff;
  elevation: 3;
  overflow: hidden;
  margin-horizontal: 16px;
  margin-vertical: 8px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

export const InfoContainer = styled.View`
  padding: 16px;
`;

export const Location = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Comment = styled.Text`
  font-size: 14px;
  color: #888;
  margin-bottom: 4px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GREEN_700};
`;