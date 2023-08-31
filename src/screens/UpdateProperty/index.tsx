import { Container } from './styles';

import { HouseWithId } from '../../types/house';

import { Header } from '../../components/Header';

import { updateHouse } from '../../services/updateHouse';

import { PropertyForm } from '../../components/PropertyForm';

import { RouteProp, useRoute } from '@react-navigation/native';

import { GestureResponderEvent, ScrollView } from 'react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationForm } from '../../utils/validation/propertyForm';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type UpdateRouteProp = RouteProp<AppStackParamList, 'update'>;

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

interface UpdatePropertyProps {
  navigation: TypeNavigation;
}

export function UpdateProperty({ navigation }: UpdatePropertyProps) {
  const route = useRoute<UpdateRouteProp>();
  const house = route.params.house;

  const schema = useValidationForm();

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      area: house.area,
      price: house.price,
      rooms: house.rooms,
      garage: house.garage,
      rented: house.rented,
      comment: house.comment,
      address: house.address,
      bathroom: house.bathroom,
      newHouse: house.newHouse,
      imageUrls: house.imageUrls,
      typeHouse: house.typeHouse,
      contactName: house.contactName,
      neighborhood: house.neighborhood,
      contactEmail: house.contactEmail,
      contactPhone: house.contactPhone,
      contactAddress: house.contactAddress,
    },
    resolver: yupResolver(schema),
  });

  const goHome = () => {
    navigation.navigate('home');
  };

  const onSubmit = async (house: HouseWithId) => {
    try {
      await updateHouse(house);

      goHome();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProperty = (event: GestureResponderEvent) => {
    handleSubmit((values) => {
      const isImageUrls = values.imageUrls?.length;
      const imageUrls = isImageUrls ? values.imageUrls : [];

      const newValues = { ...house, ...values, imageUrls };

      onSubmit(newValues as HouseWithId);
    })(event);
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} showBackButton={true} />

        <PropertyForm
          control={control}
          setValue={setValue}
          getValues={getValues}
          buttonTitle="Atualizar Imóvel"
          onSubmit={handleUpdateProperty}
        />
      </ScrollView>
    </Container>
  );
}
