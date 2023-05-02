import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fff;
`;

const Section = styled.View`
  margin-bottom: 16px;
`;

const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const Value = styled.Text`
  font-size: 16px;
  color: #333;
`;

export function InfoScreen() {
  const property = {
    type: 'Alugar',
    price: 2000,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
  };

  return (
    <Container>
      <Section>
        <Label>Tipo</Label>
        <Value>{property.type}</Value>
      </Section>
      <Section>
        <Label>Preço</Label>
        <Value>R$ {property.price}</Value>
      </Section>
      <Section>
        <Label>Quartos</Label>
        <Value>{property.bedrooms}</Value>
      </Section>
      <Section>
        <Label>Banheiros</Label>
        <Value>{property.bathrooms}</Value>
      </Section>
      <Section>
        <Label>Vagas</Label>
        <Value>{property.parking}</Value>
      </Section>
    </Container>
  );
}