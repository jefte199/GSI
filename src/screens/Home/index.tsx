import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Line, OnClick } from './styles';

import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { Button } from '../../Components/Button';
import { ListEmpty } from "../../Components/ListEmpty";

export function Home() {
  const imgCasa = require('../../assets/Casa.jpg');
  const data = [{ id: 1, title: 'casa 1', location: 'aquela rua', price: '15000R$' }, { id: 2, title: 'casa 2', location: 'aquela rua', price: '95000R$' }, { id: 3, title: 'casa 3', location: 'aquela rua', price: '150R$' }]

  const navigation = useNavigation();

  function handleAdd() {
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