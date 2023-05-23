import { Container, BackButton, BackIcon, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  showBackButton: boolean;
}

export function Header({ showBackButton }: Props) {
  const navigation = useNavigation();

  function handleGoBack () {
    navigation.navigate('home');
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
       }
      <Title>Controle de imoveis</Title>
    </Container>
  );
}
