import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledPicker = styled(Picker)`
  color: #333;
`;