import React from 'react';
import { Container, ContainerTags, Title, Image, TagText, Description } from './styles';
import { Header } from '../../Components/Header';
import { priceFormat } from '../../util/priceFormat';
import { Button } from '../../Components/Button';
import { Tag } from '../../Components/Tag';
import ContactComponent from '../../Components/ContactComponent';

const imgCasa = require('../../assets/Casa.jpg');

interface Props {
  Typo: string;
  Status: string;
  Finish_date: string;
  Price: number;
  Adress: string;
  Neighborhood: string;
  Cars: number;
  Bathrooms: number;
  Rooms: number;
  Description: string;
  Area: number;
}

export function InfoScreen() {

  return (
    <Container>
      <Header showBackButton={true} />
      <Image source={imgCasa} />


      <ContainerTags>
        <TagText type='PRIMARY'>Aluguel</TagText>
        <TagText type='PRIMARY'>NOVO</TagText>
        <TagText type='PRIMARY'>23 m²</TagText>
        <TagText type='SECONDARY'>20/03/2004</TagText>
      </ContainerTags>

      <Title> R$ {priceFormat(300)}</Title>
      <Description>
        Rua tabelião eneias 331 Quixadá centro
      </Description>


      <Tag
        numberGarage={'2'}
        numberShower={'2'}
        numberBed={'4'}
        area={'26'}
      />


      <Description>
        Casa bem localiza com acesso rapido ao campo e a cidade, perto do posto de atendimento medico e perto do possto policail
      </Description>

      <ContactComponent />
      <Button
        title='Compartilhar'
        type='TERTIARY' />
    </Container >
  );
}