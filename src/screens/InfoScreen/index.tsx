import React from 'react';
import { Container, Title, Image, Text, Description } from '../AddPropertyForm/styles';
import { Header } from '../../Components/Header';
import { priceFormat } from '../../util/priceFormat';
import { Button } from '../../Components/Button';
import { Line } from '../../Components/Line';
import { Tag } from '../../Components/Tag';

const imgCasa = require('../../assets/Casa.jpg');

export function InfoScreen() {

  return (
    <Container>
      <Header showBackButton={true} />
      <Image source={imgCasa} />

      <Text>Venda</Text>
      <Title> R$ {priceFormat(20000)}</Title>
      <Description>
        Casa bem localiza com acesso rapido ao campo e a cidade, perto do posto de atendimento medico e perto do possto policail
      </Description>

      <Line />
      <Tag number={'10'} iconName="" text='banheiro'/>

      <Button
        title='Compartilhar'
        type='TERTIARY' />
    </Container >
  );
}