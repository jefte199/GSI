import { useState } from 'react';
import { ScrollView } from 'react-native';
import dayjs from 'dayjs';
import { Container, InputContainer, InputLabel } from './styles';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { Select } from '../../Components/Select';
import { SelectDataTime } from '../../Components/SelectDataTime';

export function AddPropertyForm() {
  const [newHouse, setNewHouse] = useState<string>('');
  const [rented, setRented] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [garage, setGarage] = useState<string>("");
  const [price, setPrice] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [bathroom, setBathroom] = useState<string>("");
  const [rooms, setRooms] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [comment, setComment] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactAddress, setContactAddress] = useState<string>('');

  return (
    <ScrollView>
      <Container>
        <Header showBackButton={true} />

        <InputContainer>
          <InputLabel>Vencimento  {dayjs(selectedDate).format('DD/MM/YYYY')}</InputLabel>
          <SelectDataTime
          setSelectedOption={setSelectedDate} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Imovel é novo ou usado</InputLabel>
          <Select
            List={["Novo", "Usado"]}
            SelectedOption={newHouse}
            setSelectedOption={setNewHouse} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Imovel se encontra</InputLabel>
          <Select
            List={["Alugado", "Vendido", "Livre"]}
            SelectedOption={rented}
            setSelectedOption={setRented} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Vagas / Garagens</InputLabel>
          <Select
            List={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            SelectedOption={garage}
            setSelectedOption={setGarage} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Banheiros</InputLabel>
          <Select
            List={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            SelectedOption={bathroom}
            setSelectedOption={setBathroom} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Quartos</InputLabel>
          <Select
            List={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            SelectedOption={rooms}
            setSelectedOption={setRooms} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Área em m²</InputLabel>
          <Input
            value={area}
            onChangeText={setArea}
            placeholder="206"
            keyboardType="numeric"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Preço R$</InputLabel>
          <Input
            value={price}
            onChangeText={setPrice}
            placeholder="300000"
            keyboardType="numeric"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Endereço</InputLabel>
          <Input
            value={address}
            onChangeText={setAddress}
            placeholder="Rua tabelião eneias 331 Quixadá"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Bairro</InputLabel>
          <Input
            value={neighborhood}
            onChangeText={setNeighborhood}
            placeholder="Campo novo"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Comentarios/Detalhes</InputLabel>
          <Input
            value={comment}
            onChangeText={setComment}
            placeholder="Casa com muito espaço perto da escola e da praça com otima vista"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Nome do proprietario</InputLabel>
          <Input
            value={contactName}
            onChangeText={setContactName}
            placeholder="Carlos"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Nome do proprietario</InputLabel>
          <Input
            value={contactName}
            onChangeText={setContactName}
            placeholder="Carlos"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Email do proprietario</InputLabel>
          <Input
            value={contactEmail}
            onChangeText={setContactEmail}
            placeholder="Carlos"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Telefone do proprietario</InputLabel>
          <Input
            value={contactPhone}
            onChangeText={setContactPhone}
            placeholder="88997060033"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Endereço do proprietario</InputLabel>
          <Input
            value={contactAddress}
            onChangeText={setContactAddress}
            placeholder="Rua Virgilio tavora 1345"
          />
        </InputContainer>

      </Container>
    </ScrollView>
  )
}

/*
  Alugar ou vender - Select
  Preço - input
  Quartos - Select
  Bainheiros - Select
  Vagas - Select
  Endereço - Input
  Bairro - Select
 */