import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;

  border: ${({ isError }: { isError: boolean }) => {
    return isError ? '1px solid #ec4561' : 'none';
  }};
`;
