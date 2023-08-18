import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ContentModal = styled.View`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
