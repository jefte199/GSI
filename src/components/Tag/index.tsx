import { Text } from '../Text';

import {
  CarIcon,
  BedIcon,
  Container,
  ShowerIcon,
  HouseLineIcon,
  ContainerIcon,
} from './styles';

interface Props {
  area: string;
  numberBed: string;
  numberGarage: string;
  numberShower: string;
}

export const Tag: React.FC<Props> = ({
  numberGarage,
  numberShower,
  numberBed,
  area,
}) => {
  return (
    <Container>
      <ContainerIcon>
        <CarIcon />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {numberGarage}
        </Text>

        <Text>Vagas</Text>
      </ContainerIcon>

      <ContainerIcon>
        <ShowerIcon />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {numberShower}
        </Text>

        <Text>Bainheiros</Text>
      </ContainerIcon>

      <ContainerIcon>
        <BedIcon />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {numberBed}
        </Text>

        <Text>Quartos</Text>
      </ContainerIcon>

      <ContainerIcon>
        <HouseLineIcon />

        <Text size={18} weight="700" style={{ marginBottom: 4 }}>
          {area}m²
        </Text>

        <Text>Área</Text>
      </ContainerIcon>
    </Container>
  );
};
