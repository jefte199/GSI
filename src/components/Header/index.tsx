import { Text } from '../Text';

import { useTheme } from 'styled-components/native';

import { Container, BackButton, BackIcon } from './styles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

interface HeaderProps {
  showBackButton: boolean;
  navigation: TypeNavigation;
}

export function Header({ navigation, showBackButton }: HeaderProps) {
  const { COLORS } = useTheme();

  const handleGoBack = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Text
        size={24}
        weight="700"
        color={COLORS.ORANGE_100}
        style={{ padding: 16, marginTop: 10 }}
      >
        Controle de imóveis
      </Text>
    </Container>
  );
}
