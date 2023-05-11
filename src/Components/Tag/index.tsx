import { Container, ContainerIcon, CarIcon, ShowerIcon, BedIcon, Number, Text } from './styles';

interface Props {
  numberGarage: string;
  numberShower: string;
  numberBed: string;
}

export const Tag: React.FC<Props> = ({ numberGarage, numberShower, numberBed }) => {
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


    </Container>
  );
};

