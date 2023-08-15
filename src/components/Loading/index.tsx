import { Container } from './styles';

import { useTheme } from 'styled-components';

import { ActivityIndicator } from 'react-native';

export const Loading = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <ActivityIndicator color={`${COLORS.ORANGE_100}`} size="large" />
    </Container>
  );
};
