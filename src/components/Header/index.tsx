import { Text } from '../Text';

import { Ionicons } from '@expo/vector-icons';

import { Container, BackButton } from './styles';

import { useTheme } from 'styled-components/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

interface HeaderProps {
  onGoBack?: () => void;
  showBackButton: boolean;
  navigation?: TypeNavigation;
}

export function Header(props: HeaderProps) {
  const { navigation, showBackButton } = props;
  const { onGoBack = navigation!.goBack } = props;

  const { COLORS } = useTheme();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={onGoBack}>
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
