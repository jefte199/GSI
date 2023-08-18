import { Container, Line } from './styles';

import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { HouseWithId } from '../../types/House';

import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { ListEmpty } from '../../components/ListEmpty';
import { ModalFilters } from '../../components/ModalFilters';

import { select } from '../../services/select';
import { createTable } from '../../services/createTable';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

interface HomeProps {
  navigation: TypeNavigation;
}

export function Home({ navigation }: HomeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModalFilters, setIsOpenModalFilters] = useState(false);

  const [houses, setHouses] = useState<HouseWithId[]>([]);

  const goPageAddProperty = () => {
    navigation.navigate('add_imovel');
  };

  const goPageInfo = (house: HouseWithId) => {
    navigation.navigate('info', { house });
  };

  const toggleModalFilters = () => {
    setIsOpenModalFilters(!isOpenModalFilters);
  };

  const handleHouses = async () => {
    setIsLoading(true);

    const houses = await select();
    setHouses(houses ?? []);

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

  const flex = houses.length === 0 ? 1 : undefined;

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header navigation={navigation} showBackButton={false} />

          <Line />

          <FlatList
            data={houses}
            keyExtractor={({ id }) => `${id}`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => renderCard(item)}
            contentContainerStyle={{ flex, paddingTop: 10, paddingBottom: 50 }}
            ListEmptyComponent={() => (
              <ListEmpty message="Oops, sem imóveis para exibir!" />
            )}
          />

          <Button type="TERTIARY" onPress={toggleModalFilters}>
            Aplicar filtros
          </Button>

          <Button type="PRIMARY" onPress={goPageAddProperty}>
            Cadastrar um novo imóvel
          </Button>

          <ModalFilters
            setHouseFilter={setHouses}
            isOpen={isOpenModalFilters}
            toggle={toggleModalFilters}
          />
        </>
      )}
    </Container>
  );
}
