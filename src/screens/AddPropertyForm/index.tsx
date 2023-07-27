import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, InputContainer, InputLabel } from './styles';
// components
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { Select } from '../../Components/Select';
import { SelectDataTime } from '../../Components/SelectDataTime';
import { Button } from '../../Components/Button';
// types
import { House } from '../../types/House';
// SQlite
import { sql } from '../../SQL';

export function AddPropertyForm() {
  const navigation = useNavigation();
  const [newHouse, setNewHouse] = useState<string>('Usado');
  const [rented, setRented] = useState<string>('Livre');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [garage, setGarage] = useState<string>('1');
  const [bathroom, setBathroom] = useState<string>('1');
  const [rooms, setRooms] = useState<string>('1');
  const [price, setPrice] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactAddress, setContactAddress] = useState<string>('');
  // Set modal
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const house: House = {
    id: 0,
    newHouse: newHouse,
    rented: rented,
    selectedDate: selectedDate,
    garage: garage,
    price: Number(price),
    address: address,
    neighborhood: neighborhood,
    bathroom: Number(bathroom),
    rooms: Number(rooms),
    area: Number(area),
    comment: comment,
    imageUrlString: [],
    contactName: contactName,
    contactEmail: contactEmail,
    contactPhone: contactPhone,
    contactAddress: contactAddress,
  };

  async function handleHome() {
    navigation.navigate('home');
  }

  const create = async () => {
    await sql.createHouse(house)
      .then((house) => {
        console.log('House:', house);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
    handleHome();
  }

  return (
    <ScrollView>
      <Container>
        <Header showBackButton={true} />

        <InputContainer>
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
          <InputLabel>Email do proprietario</InputLabel>
          <Input
            value={contactEmail}
            onChangeText={setContactEmail}
            placeholder="Carlos@gmail"
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

        <Button
          title='Cadastrar Imovel'
          type='PRIMARY'
          onPress={create} />
      </Container>
    </ScrollView>
  )
}
