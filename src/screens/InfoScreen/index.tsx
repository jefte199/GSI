import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, ContainerTags, Title, Image, TagText, Description } from './styles';
import { priceFormat } from '../../util/priceFormat';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
import { Tag } from '../../Components/Tag';
import { ContactComponent } from '../../Components/ContactComponent';
import { House } from '../../types/House';
import { sql } from '../../SQL';

const imgCasa = require('../../assets/Casa.jpg');

interface Props {
  route: {
    params: {
      home: House
    }
  }
}

export function InfoScreen(home: Props) {
  const req = home.route.params.home;

  const navigation = useNavigation();

  async function handleAdd() {
    navigation.navigate('home');
  }

  const deleteHouse = async () => {
    await sql.deleteHouse((req.id))
      .then((house) => {
        console.log(house)
      })
      .catch((error) => {
        return error
      });
      handleAdd();
  }
  return (
    <ScrollView>
      <Container>
        <Header showBackButton={true} />
        <Image source={imgCasa} />

        <ContainerTags>
          <TagText type='PRIMARY'>{req.rented || "💔"}</TagText>
          <TagText type='PRIMARY'>{req.newHouse || "💔"}</TagText>
          <TagText type='SECONDARY'>{req.selectedDate || "💔"}</TagText>
        </ContainerTags>

        <Title> R$ {priceFormat(req.price) || "💔"}</Title>
        <Description>
          {req.comment || "💔"}
        </Description>


        <Tag
          numberGarage={req.garage || "💔"}
          numberShower={req.bathroom.toString() || "💔"}
          numberBed={req.rooms.toString() || "💔"}
          area={req.area.toString() || "💔"}
        />

        <ContactComponent />

        <Button
          title='Compartilhar'
          type='TERTIARY' />

        <Button
          title='Editar'
          type='PRIMARY' />

        <Button
          onPress={deleteHouse}
          title='Deletar'
          type='SECONDARY' />
      </Container >
    </ScrollView>
  );
}