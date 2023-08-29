import { Container } from './styles';

import { House } from '../../types/house';

import { Header } from '../../components/Header';

import { createHouse } from '../../services/createHouse';

import { PropertyForm } from '../../components/PropertyForm';

import { GestureResponderEvent, ScrollView } from 'react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationForm } from '../../utils/validation/propertyForm';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<AppStackParamList>;

interface AddPropertyProps {
  navigation: TypeNavigation;
}

export function AddProperty({ navigation }: AddPropertyProps) {
  const schema = useValidationForm();

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      rooms: 1,
      garage: 1,
      comment: '',
      address: '',
      bathroom: 1,
      imageUrls: [],
      contactName: '',
      newHouse: 'Novo',
      neighborhood: '',
      contactEmail: '',
      contactPhone: '',
      rented: 'Alugado',
      contactAddress: '',
    },
    resolver: yupResolver(schema),
  });

  const goHome = () => {
    navigation.navigate('home');
  };

  const onSubmit = async (house: House) => {
    try {
      await createHouse(house);

      goHome();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProperty = (event: GestureResponderEvent) => {
    handleSubmit((values) => {
      onSubmit(values as House);
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
          onSubmit={handleAddProperty}
          buttonTitle="Cadastrar Imóvel"
        />
      </ScrollView>
    </Container>
  );
}
