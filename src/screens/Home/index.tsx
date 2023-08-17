import { Container, Line } from './styles';

import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { ListEmpty } from '../../components/ListEmpty';

import { select } from '../../services/select';
import { createTable } from '../../services/createTable';

import { HouseWithId } from '../../types/House';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

interface HomeProps {
  navigation: TypeNavigation;
}

export function Home({ navigation }: HomeProps) {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState<HouseWithId[]>([]);

  function goPageAddProperty() {
    navigation.navigate('add_imovel');
  }

  function goPageInfo(house: HouseWithId) {
    navigation.navigate('info', { house });
  }

  const handleHouses = async () => {
    setIsLoading(true);

    const house = await select();

    setData(house ?? []);

    setIsLoading(false);
  };

  function renderCard(item: HouseWithId) {
    return (
      <TouchableOpacity onPress={() => goPageInfo(item)}>
        <Card
          comment={item.comment}
          location={item.address}
          price={`${item.price}`}
          imageSource={item.imageUrl}
        />
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    createTable();

    navigation.addListener('focus', handleHouses);

    return () => {
      navigation.removeListener('focus', handleHouses);
    };
  }, []);

  const flex = data.length === 0 ? 1 : undefined;

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header navigation={navigation} showBackButton={false} />

          <Line />

          <FlatList
            data={data}
            keyExtractor={({ id }) => `${id}`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => renderCard(item)}
            contentContainerStyle={{ flex, paddingTop: 10, paddingBottom: 50 }}
            ListEmptyComponent={() => (
              <ListEmpty message="Cadastre o seu primeiro imóvel" />
            )}
          />

          <Button type="PRIMARY" onPress={goPageAddProperty}>
            Cadastrar um novo imóvel
          </Button>
        </>
      )}
    </Container>
  );
}
