import { Text } from '../Text';

import { Ionicons } from '@expo/vector-icons';

import { Container, BackButton } from './styles';

import { useTheme } from 'styled-components/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

interface HeaderProps {
  showBackButton: boolean;
  navigation: TypeNavigation;
}

export function Header({ navigation, showBackButton }: HeaderProps) {
  const { COLORS } = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <Ionicons
            size={32}
            color={COLORS.ORANGE_100}
            name="chevron-back-outline"
          />
        </BackButton>
      )}

      <Text
        size={24}
        weight="700"
        style={{ padding: 16 }}
        color={COLORS.ORANGE_100}
      >
        Controle de imóveis
      </Text>
    </Container>
  );
}
