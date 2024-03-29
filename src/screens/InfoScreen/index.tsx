import { useState } from 'react';

import { useTheme } from 'styled-components';

import { houseDatabaseQueries } from '../../SQL';

import { priceFormat } from '../../utils/priceFormat';

import * as Sharing from 'expo-sharing';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

import { ScrollView, Share } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Tag } from '../../components/Tag';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { ModalDelete } from './components/ModalDelete';
import { ImageCarousel } from '../../components/ImageCarousel';
import { ContactComponent } from '../../components/ContactComponent';

import {
  Container,
  ContainerTag,
  ContainerPrice,
  ContainerImage,
  ButtonShareImage,
  ContainerDescription,
} from './styles';

type InfoRouteProp = RouteProp<AppStackParamList, 'info'>;

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

type TypeHouseIcons = 'Casa' | 'Apartamento' | 'Terreno' | 'Ponto comercial';

interface InfoProps {
  navigation: TypeNavigation;
}

export function InfoScreen({ navigation }: InfoProps) {
  const { COLORS } = useTheme();

  const route = useRoute<InfoRouteProp>();
  const house = route.params.house;

  const {
    id,
    area,
    rooms,
    price,
    garage,
    rented,
    comment,
    newHouse,
    bathroom,
    typeHouse,
    imageUrls,
    contactName,
    contactEmail,
    contactPhone,
    contactAddress,
  } = house;

  const props = {
    name: contactName,
    email: contactEmail,
    phone: contactPhone,
    address: contactAddress,
  };

  const [imageToShare, setImageToShare] = useState('');
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const goPageHome = () => {
    navigation.navigate('home');
  };

  const goPageUpdate = () => {
    navigation.navigate('update', { house });
  };

  const toggleModalDelete = () => {
    setIsOpenModalDelete(!isOpenModalDelete);
  };

  const handleDeleteHouse = async () => {
    try {
      await houseDatabaseQueries.deleteHouse(id);

      goPageHome();
    } catch (error) {
      console.error('Error deleting house:', error);
    }
  };

  const handleShareImage = async () => {
    try {
      await Sharing.shareAsync(imageToShare);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShareContent = async () => {
    try {
      const message = `
      Detalhes do Imóvel:
        - Situação: ${rented},
        - Área em m²: ${area},
        - Condição: ${newHouse},
        - Total de quartos: ${rooms},
        - Vagas / Garagens: ${garage},
        - Tipo do imóvel: ${typeHouse},
        - Preço: ${priceFormat(price)},
        - Total de banheiros: ${bathroom},
        - Comentários / Detalhes: ${comment}.
      `;

      await Share.share({ message });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePointEnd = (value: string) => {
    if (value.trim().endsWith('.')) return value.trim();
    return `${value.trim()}.`;
  };

  const handleComment = () => {
    const newComment = handlePointEnd(comment);
    return newComment;
  };

  const typeHouseIcons = {
    Casa: <Feather name="home" size={24} color={COLORS.ORANGE_100} />,
    Terreno: <FontAwesome name="tree" size={24} color={COLORS.ORANGE_100} />,
    Apartamento: (
      <FontAwesome name="building" size={24} color={COLORS.ORANGE_100} />
    ),
    ['Ponto comercial']: (
      <FontAwesome name="shopping-bag" size={24} color={COLORS.ORANGE_100} />
    ),
  };

  const isHome = typeHouse === 'Casa';

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} showBackButton={true} />

        <ContainerImage>
          <ImageCarousel
            images={imageUrls}
            onGetImageToShare={(image: string) => setImageToShare(image)}
          />

          {!!imageUrls.length && (
            <ButtonShareImage onPress={handleShareImage}>
              <Ionicons
                size={32}
                name="share-outline"
                color={COLORS.ORANGE_100}
              />
            </ButtonShareImage>
          )}
        </ContainerImage>

        <ContainerPrice>
          <Ionicons color="green" name="cash-outline" size={24} />

          <Text weight="700">{priceFormat(price)}</Text>
        </ContainerPrice>

        <ContainerTag>
          {typeHouseIcons[typeHouse as TypeHouseIcons]}

          <Text>
            Este é {isHome ? 'uma' : 'um'} {typeHouse.toLocaleLowerCase()}. Além
            disso, é {newHouse.toLowerCase()} e está {rented.toLowerCase()}.
          </Text>
        </ContainerTag>

        <ContainerDescription>
          <Ionicons size={24} name="chatbox-outline" color={COLORS.GRAY_300} />

          <Text>{handleComment()}</Text>
        </ContainerDescription>

        <Tag
          area={area.toString()}
          numberBed={rooms.toString()}
          numberGarage={garage.toString()}
          numberShower={bathroom.toString()}
        />

        <ContactComponent props={props} />

        <Button type="PRIMARY" onPress={goPageUpdate}>
          <Ionicons color={'white'} name="pencil-outline" size={20} /> Editar
        </Button>

        <Button type="SECONDARY" onPress={toggleModalDelete}>
          <Ionicons color={'white'} name="trash-outline" size={20} /> Deletar
        </Button>

        <Button
          type="TERTIARY"
          onPress={handleShareContent}
          style={{ marginBottom: 16 }}
        >
          <Ionicons color={'white'} name="share-outline" size={20} />{' '}
          Compartilhar
        </Button>

        <ModalDelete
          toggle={toggleModalDelete}
          isOpen={isOpenModalDelete}
          onDeleteHouse={handleDeleteHouse}
        />
      </ScrollView>
    </Container>
  );
}
