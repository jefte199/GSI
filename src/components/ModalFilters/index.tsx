import { Dispatch, SetStateAction, useState } from 'react';

import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { Header } from '../Header';
import { Select } from '../Select';

import { useTheme } from 'styled-components';

import { HouseWithId } from '../../types/house';

import { Modal, ScrollView } from 'react-native';

import Slider from '@react-native-community/slider';

import { priceFormat } from '../../utils/priceFormat';

import { Container, ContainerFilter } from './styles';

import { select } from '../../services/select';
import { filterHouses } from '../../services/filterHouses';

import { PropertySearchFilters } from '../../types/propertySearchFilters';

import { formatNumberDecimalPlaces } from '../../utils/formatNumberDecimalPlaces';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  setHouseFilter: Dispatch<SetStateAction<HouseWithId[]>>;
}

type FieldOptions =
  | 'area'
  | 'price'
  | 'rooms'
  | 'garage'
  | 'rented'
  | 'address'
  | 'bathroom'
  | 'newHouse'
  | 'neighborhood';

export function ModalFilters({ isOpen, toggle, setHouseFilter }: Props) {
  const { COLORS } = useTheme();

  const defaultValues = {
    area: 0,
    rooms: 0,
    price: 0,
    garage: 0,
    rented: '',
    address: '',
    bathroom: 0,
    newHouse: '',
    neighborhood: '',
  } as PropertySearchFilters;

  const [filters, setFilters] = useState(defaultValues);

  const handleFilterHouses = async () => {
    const result = await filterHouses(filters);

    if (!result) return;

    setHouseFilter(result);
    toggle();
  };

  const handleChange = (field: FieldOptions, value: string | number) => {
    setFilters((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleResetFilters = async () => {
    const allHouses = await select();

    setHouseFilter(allHouses ?? []);
    setFilters(defaultValues);

    toggle();
  };

  return (
    <Modal visible={isOpen} animationType="slide" onRequestClose={toggle}>
      <Container>
        <ScrollView style={{ margin: 24 }} showsVerticalScrollIndicator={false}>
          <Header onGoBack={toggle} showBackButton />

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Filtrar por imóvel
            </Text>

            <Select
              list={['Novo', 'Usado']}
              selectedOption={filters.newHouse || ''}
              setSelectedOption={(value) => {
                handleChange('newHouse', String(value));
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Filtrar por imóvel
            </Text>

            <Select
              selectedOption={filters.rented || ''}
              list={['Alugado', 'Livre', 'Vendido']}
              setSelectedOption={(value) => {
                handleChange('rented', String(value));
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Filtrar imóvel por qual bairro
            </Text>

            <Input
              value={filters.neighborhood || ''}
              placeholder="Campo novo"
              onChangeText={(value) => {
                handleChange('neighborhood', value);
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Filtrar imóvel por qual endereço
            </Text>

            <Input
              value={filters.address || ''}
              placeholder="Rua tabelião eneias 331 Quixadá"
              onChangeText={(value) => {
                handleChange('address', value);
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Área {formatNumberDecimalPlaces(filters.area)} m²
            </Text>

            <Slider
              minimumValue={0}
              maximumValue={10000}
              thumbTintColor={COLORS.GRAY_300}
              maximumTrackTintColor={COLORS.GRAY_300}
              minimumTrackTintColor={COLORS.GRAY_400}
              onValueChange={(value) => {
                handleChange('area', value);
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Preço {priceFormat(filters.price)}
            </Text>

            <Slider
              minimumValue={0}
              maximumValue={10000}
              thumbTintColor={COLORS.GRAY_300}
              maximumTrackTintColor={COLORS.GRAY_300}
              minimumTrackTintColor={COLORS.GRAY_400}
              onValueChange={(value) => {
                handleChange('price', value);
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Total de vagas: {filters.garage}
            </Text>

            <Slider
              minimumValue={0}
              maximumValue={9}
              thumbTintColor={COLORS.GRAY_300}
              maximumTrackTintColor={COLORS.GRAY_300}
              minimumTrackTintColor={COLORS.GRAY_400}
              onValueChange={(value) => {
                handleChange('garage', Math.floor(value));
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Total de quartos: {filters.rooms}
            </Text>

            <Slider
              minimumValue={0}
              maximumValue={9}
              thumbTintColor={COLORS.GRAY_300}
              maximumTrackTintColor={COLORS.GRAY_300}
              minimumTrackTintColor={COLORS.GRAY_400}
              onValueChange={(value) => {
                handleChange('rooms', Math.floor(value));
              }}
            />
          </ContainerFilter>

          <ContainerFilter>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Total de banheiros: {filters.bathroom}
            </Text>

            <Slider
              minimumValue={0}
              maximumValue={9}
              thumbTintColor={COLORS.GRAY_300}
              maximumTrackTintColor={COLORS.GRAY_300}
              minimumTrackTintColor={COLORS.GRAY_400}
              onValueChange={(value) => {
                handleChange('bathroom', Math.floor(value));
              }}
            />
          </ContainerFilter>

          <Button type="PRIMARY" onPress={handleFilterHouses}>
            Aplicar
          </Button>

          <Button type="TERTIARY" onPress={handleResetFilters}>
            Resetar
          </Button>
        </ScrollView>
      </Container>
    </Modal>
  );
}
