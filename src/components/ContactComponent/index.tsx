import { Text } from '../Text';

import { Container, ContactInfo } from './styles';

import { Ionicons, Feather } from '@expo/vector-icons';

interface Props {
  props: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

export const ContactComponent = ({ props }: Props) => {
  const { address, email, name, phone } = props;

  return (
    <Container>
      <Text size={18} style={{ marginBottom: 8 }} weight="700">
        Informações de contato do proprietário:
      </Text>

      <ContactInfo>
        <Feather name="user" size={20} color="black" />

        <Text>{name}</Text>
      </ContactInfo>

      <ContactInfo>
        <Feather name="mail" size={20} color="red" />

        <Text>{email}</Text>
      </ContactInfo>

      <ContactInfo>
        <Feather name="phone" size={20} color="green" />

        <Text>{phone}</Text>
      </ContactInfo>

      <ContactInfo>
        <Ionicons color="black" name="location-outline" size={20} />

        <Text>{address}</Text>
      </ContactInfo>
    </Container>
  );
};
