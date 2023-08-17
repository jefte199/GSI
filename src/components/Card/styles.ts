import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 6px;
  elevation: 3;
  display: flex;
  overflow: hidden;
  margin: 8px 16px;
  border-radius: 8px;
  flex-direction: column;
  background-color: #fff;
`;

export const ContainerText = styled.View`
  gap: 8px;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

export const InfoContainer = styled.View`
  gap: 6px;
  padding: 16px;
`;
