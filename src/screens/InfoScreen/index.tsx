import React, { useState } from 'react';
import { View, Text, Modal, ScrollView } from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  async function handleHome() {
    navigation.navigate('home');
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const deleteHouse = async () => {
    await sql.deleteHouse((req.id))
      .then((house) => {
        console.log(house)
      })
      .catch((error) => {
        return error
      });
    handleHome();
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

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Tem certeza que quer excluir essa casa?</Text>
              <Button
                title='Cancelar'
                type='PRIMARY'
                onPress={toggleModal} />
              <Button
                title='Deletar'
                type='SECONDARY'
                onPress={deleteHouse} />
            </View>
          </View>
        </Modal>

        <Button
          onPress={toggleModal}
          title='Deletar'
          type='SECONDARY' />
      </Container >
    </ScrollView>
  );
}