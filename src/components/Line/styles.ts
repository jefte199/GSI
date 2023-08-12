import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 1px;
  margin: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
