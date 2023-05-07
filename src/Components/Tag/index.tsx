import { Container, StyledIcon, Number, Text } from './styles';

interface Props {
  iconName: string;
  number: string;
  text: string;
}

export const Tag: React.FC<Props> = ({ iconName, number, text }) => {
  return (
    <Container>
      <StyledIcon />
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Container>
  );
};

