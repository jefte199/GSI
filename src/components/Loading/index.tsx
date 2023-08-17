import { Container } from './styles';

import { useTheme } from 'styled-components';

import { ActivityIndicator } from 'react-native';

interface Props {
  color?: string;
  size?: 'large' | 'small';
}

export const Loading = ({ color, size = 'large' }: Props) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <ActivityIndicator color={color ?? `${COLORS.ORANGE_100}`} size={size} />
    </Container>
  );
};
