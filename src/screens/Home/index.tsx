import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Style
import { Container, Line, OnClick } from './styles';
// Components
import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { Button } from '../../Components/Button';
import { ListEmpty } from "../../Components/ListEmpty";
// SQL
import { sql } from '../../SQL';
import { House } from '../../types/House';

export function Home() {
  const house: House = {
    newHouse: 'Yes',
    rented: 'No',
    selectedDate: '2023-05-17',
    garage: 'Yes',
    price: 200000,
    address: '123 Main St',
    neighborhood: 'Example Neighborhood',
    bathroom: 2,
    rooms: 3,
    area: 150,
    comment: 'Spacious house with a backyard',
    imageUrlString: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
    contactName: 'John Doe',
    contactEmail: 'johndoe@example.com',
    contactPhone: '123-456-7890',
    contactAddress: '456 Elm St',
  };

  function createTable() {
    sql.createTable()
      .then((house) => {
        console.log('House:', house);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }

  function create() {
    sql.createHouse(house)
      .then((house) => {
        console.log('House:', house);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }

  function select() {
    sql.getHouse()
      .then((house) => {
        console.log('House:', house);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }

  useEffect(() => {
    createTable();
    navigation.navigate('add_imovel');
  }, []);

  const imgCasa = require('../../assets/Casa.jpg');
  const data = [{ id: 1, title: 'casa 1', location: 'aquela rua', price: '15000R$' }, { id: 2, title: 'casa 2', location: 'aquela rua', price: '95000R$' }, { id: 3, title: 'casa 3', location: 'aquela rua', price: '150R$' }]

  const navigation = useNavigation();

  function handleAdd() {
    select();
    navigation.navigate('add_imovel');
  }

  function handleInfo() {
    navigation.navigate('info');
  }

  function myCard() {
    return (
      <OnClick onPress={handleInfo}>
        <Card
          imageSource={imgCasa}
          title='Test'
          location='Rua florencio carneiro'
          price='1500R$' />
      </OnClick>
    )
  }

  return (
    <Container>
      <Header showBackButton={false} />

      <Line />

      <FlatList
        data={data}
        renderItem={myCard}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={data.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Cadastre o primeiro Imovel" />}
      />

      <Button
        title='Cadastrar novo Imovel'
        type='PRIMARY'
        onPress={handleAdd} />
    </Container>
  );
}

/**
 alugar - comprar
 piscina
 varanda

 preço
 comodos banheiras ? quartos ? vagas ?
 bairro
 */