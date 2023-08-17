import { Text } from '../Text';

import { useTheme } from 'styled-components';

import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  children: React.ReactNode;
  type: ButtonTypeStyleProps;
};

export function Button({ children, type, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container type={type} {...rest}>
      <Text color={COLORS.WHITE} weight="700">
        {children}
      </Text>
    </Container>
  );
}
