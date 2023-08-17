import { Text } from '../Text';

import { useTheme } from 'styled-components/native';

import { Container, ContainerIcon } from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';

interface Props {
  area: string;
  numberBed: string;
  numberGarage: string;
  numberShower: string;
}

export const Tag: React.FC<Props> = (props: Props) => {
  const { COLORS } = useTheme();

  const { area, numberBed, numberGarage, numberShower } = props;

  return (
    <Container>
      <ContainerIcon>
        <Ionicons name="car" size={24} color={COLORS.ORANGE_100} />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {numberGarage}
        </Text>

        <Text>Vaga{Number(numberGarage) > 1 ? 's' : ''}</Text>
      </ContainerIcon>

      <ContainerIcon>
        <Feather name="droplet" size={24} color={COLORS.ORANGE_100} />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {numberShower}
        </Text>

        <Text>Bainheiro{Number(numberShower) > 1 ? 's' : ''}</Text>
      </ContainerIcon>

      <ContainerIcon>
        <Ionicons name="bed" size={24} color={COLORS.ORANGE_100} />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {numberBed}
        </Text>

        <Text>Quarto{Number(numberBed) > 1 ? 's' : ''}</Text>
      </ContainerIcon>

      <ContainerIcon>
        <Ionicons name="grid-outline" size={24} color={COLORS.ORANGE_100} />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {area}m²
        </Text>

        <Text>Área</Text>
      </ContainerIcon>
    </Container>
  );
};
