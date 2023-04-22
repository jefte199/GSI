import { Container, BackButton, BackIcon, Title } from './styles';

type Props = {
  showBackButton: boolean;
}

export function Header({ showBackButton }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
       }
      <Title>Controle de imoveis</Title>
    </Container>
  );
}
