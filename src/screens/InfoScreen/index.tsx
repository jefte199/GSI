import React from 'react';
import { Container, Title, Image, TagText, Description } from './styles';
import { Header } from '../../Components/Header';
import { priceFormat } from '../../util/priceFormat';
import { Button } from '../../Components/Button';
import { Tag } from '../../Components/Tag';

const imgCasa = require('../../assets/Casa.jpg');

export function InfoScreen() {

  const status = true;

  return (
    <Container>
      <Header showBackButton={true} />
      <Image source={imgCasa} />

      <TagText>Aluguel</TagText>
      <TagText>20/03/2004</TagText>
      
      <Title> R$ {priceFormat(300)}</Title>
      <Description>
        Rua tabelião eneias 331 Quixadá centro
      </Description>

      
      <Tag
        numberGarage={'2'}
        numberShower={'2'}
        numberBed={'4'}
      />
      

      <Description>
        Casa bem localiza com acesso rapido ao campo e a cidade, perto do posto de atendimento medico e perto do possto policail
      </Description>

      <Button
        title='Compartilhar'
        type='TERTIARY' />
    </Container >
  );
}