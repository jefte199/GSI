import { useEffect, useState } from 'react';
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
// types
import { House } from '../../types/House';
import { card } from '../../types/card';

export function Home() {
  const house: House = {
    id: 0,
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
  // States
  const [data, setData] = useState<House[]>([]);
  const createTable = async () => {
    await sql.createTable()
      .then((house) => {
        console.log('House:', house);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }

  const create = async () => {
    await sql.createHouse(house)
      .then((house) => {
        console.log('House:', house);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }

  const deleteHouseById = async (id: number) => {
    try {
      await sql.deleteHouse(id);
      console.log('House deleted successfully.');
    } catch (error) {
      console.error('Failed to delete house:', error);
    }
  };

  const select = async () => {
    await sql.getHouse()
      .then((house) => {
        console.log("house")
        console.log(house)
        setData(house)
        return house
      })
      .catch((error) => {
        return error
      });
  }

  useEffect(() => {
    createTable();
    select();
  }, []);

  const navigation = useNavigation();

  async function handleAdd() {
    navigation.navigate('add_imovel');
  }

  function handleInfo(info: House | undefined) {
    navigation.navigate('info', { home: info });
  }



  const imgCasa = require('../../assets/Casa.jpg');
  function myCard(item: House) {
    return (
      <OnClick onPress={() => handleInfo(item)}>
        <Card
          imageSource={imgCasa}
          comment={item.comment}
          location={item.address}
          price={`${item.price}`} />
      </OnClick>
    )
  }

  return (
    <Container>
      <Header showBackButton={false} />

      <Line />

      <FlatList
        data={data}
        renderItem={({ item }) => myCard(item)}
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
