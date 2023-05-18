import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  padding: 16px;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ContactInfo = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const ContactIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const ContactText = styled.Text`
  font-size: 16px;
`;
