import styled from 'styled-components/native';
import { CarSimple, Bed, Shower, HouseLine } from 'phosphor-react-native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ContainerIcon = styled.View`
  width: 25%;
  flex-direction: column;
`;

export const CarIcon = styled(CarSimple).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.ORANGE_100,
}))``;

export const ShowerIcon = styled(Shower).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.ORANGE_100
}))``;


export const BedIcon = styled(Bed).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.ORANGE_100
}))``;

export const HouseLineIcon = styled(HouseLine).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.ORANGE_100
}))``;


export const Number = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;

