import { Text } from '../Text';

import phoneIcon from './assets/phone-icon.png';
import emailIcon from './assets/email-icon.png';
import personIcon from './assets/person-icon.png';
import addressIcon from './assets/address-icon.png';

import { Container, ContactIcon, ContactInfo } from './styles';

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
      <Text color="#888" size={18} weight="700">
        Informações de contato do proprietário:
      </Text>

      <ContactInfo>
        <ContactIcon source={personIcon} />

        <Text>{name}</Text>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={emailIcon} />

        <Text>{email}</Text>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={phoneIcon} />

        <Text>{phone}</Text>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={addressIcon} />

        <Text>{address}</Text>
      </ContactInfo>
    </Container>
  );
};
