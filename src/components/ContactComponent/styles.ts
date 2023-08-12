import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  background-color: #f5f5f5;
`;

export const ContactInfo = styled(TouchableOpacity)`
  margin-bottom: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ContactIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
