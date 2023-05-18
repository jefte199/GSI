import { Container, ContainerIcon, CarIcon, ShowerIcon, BedIcon, HouseLineIcon, Number, Text } from './styles';

interface Props {
  numberGarage: string;
  numberShower: string;
  numberBed: string;
  area: string;
}

export const Tag: React.FC<Props> = ({ numberGarage, numberShower, numberBed, area }) => {
  return (
    <Container>

      <ContainerIcon>
        <CarIcon />
        <Number>{numberGarage}</Number>
        <Text>Vagas</Text>
      </ContainerIcon>

      <ContainerIcon>
        <ShowerIcon />
        <Number>{numberShower}</Number>
        <Text>Bainheiros</Text>
      </ContainerIcon>

      <ContainerIcon>
        <BedIcon />
        <Number>{numberBed}</Number>
        <Text>Quartos</Text>
      </ContainerIcon>

      <ContainerIcon>
        <HouseLineIcon />
        <Number>{area}m²</Number>
        <Text>Área</Text>
      </ContainerIcon>
    </Container>
  );
};

