import { Container, ContactIcon, Title, ContactInfo, ContactText } from "./styles";

interface Props {
  props: {
    name: string;
    email: string;
    phone: string;
    adress: string;
  }
}

export const ContactComponent = (props: Props) => {

  return (
    <Container>
      <Title>Informações de contato do proprietario</Title>

      <ContactInfo>
        <ContactIcon source={require('./assets/person-icon.png')} />
        <ContactText>{props.props.name}</ContactText>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={require('./assets/email-icon.png')} />
        <ContactText>{props.props.email}</ContactText>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={require('./assets/phone-icon.png')} />
        <ContactText>{props.props.phone}</ContactText>
      </ContactInfo>

      <ContactInfo>
        <ContactIcon source={require('./assets/address-icon.png')} />
        <ContactText>{props.props.adress}</ContactText>
      </ContactInfo>
    </Container>
  );
};


