import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  gap: 8px;
  padding: 16px 0;
  margin-top: 16px;
  background-color: #f5f5f5;
`;

export const ContactInfo = styled(TouchableOpacity as any)`
  gap: 6px;
  margin-bottom: 4px;
  flex-direction: row;
  align-items: center;
`;
