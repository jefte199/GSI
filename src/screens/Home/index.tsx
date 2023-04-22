import { FlatList } from 'react-native';
import { Line } from './styles';
import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';

export function Home() {
  const imgCasa = require('../../assets/Casa.jpg');
  const data = [{ id: 1, title: 'casa 1', location: 'aquela rua', price: '15000R$' }, { id: 2, title: 'casa 2', location: 'aquela rua', price: '95000R$' }, { id: 3, title: 'casa 3', location: 'aquela rua', price: '150R$' }]

  function myCard () {
    return (
      <Card
            imageSource={imgCasa}
            title='Test'
            location='Rua florencio carneiro'
            price='1500R$' />
    )
  }
  return (
    <>
      <Header showBackButton={false} />
      <Line />

      <FlatList
        data={data}
        renderItem={myCard}
        keyExtractor={(item) => `${item.id}`}
      />

    </>
  );
}
