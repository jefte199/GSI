import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ContainerFilter = styled.View`
  gap: 6px;
  margin-bottom: 30px;
`;
