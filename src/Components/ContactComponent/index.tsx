import { Container, ContactIcon, Title, ContactInfo, ContactText } from "./styles";
import Clipboard from '@react-native-clipboard/clipboard';

const ContactComponent = () => {
  const copyToClipboard = (text: string) => {
    Clipboard.setString('Texto para copiar');
  };

  return (
    <Container>
      <Title>Informações de contato do proprietario</Title>

      <ContactInfo onPress={() => copyToClipboard("Emaiol")}>
        <ContactIcon source={require('./assets/person-icon.png')} />
        <ContactText>Jefté Rufino</ContactText>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={require('./assets/email-icon.png')} />
        <ContactText>Jefté@gmakasd.com</ContactText>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={require('./assets/phone-icon.png')} />
        <ContactText>{88997060098}</ContactText>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={require('./assets/address-icon.png')} />
        <ContactText>Rua neo Martins pajusara</ContactText>
      </ContactInfo>
    </Container>
  );
};

export default ContactComponent;

