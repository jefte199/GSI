import { Text } from '../Text';

import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type: ButtonTypeStyleProps;
};

export function Button({ title, type, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Text weight="700">{title}</Text>
    </Container>
  );
}
