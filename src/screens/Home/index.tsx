import { View, StyleSheet } from 'react-native';
import { Container, } from './styles';
import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';

export function Home() {
  const imgNf = require('../../assets/imgNf.png');
  return (
    <>
      <Header />
      <View style={styles.separator} />
      <Card
        imageSource={imgNf}
        title='Test'
        location='Rua florencio carneiro'
        price='1500R$' />
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16,
  },
});