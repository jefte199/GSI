import { useEffect, useState } from 'react';

import { Text } from '../Text';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { Camera } from '../Camera';
import { Loading } from '../Loading';

import { useTheme } from 'styled-components';

import { phoneMask } from '../../utils/masks/phone';

import { GestureResponderEvent } from 'react-native';

import { resizeImage } from '../../utils/resizeImage';

import { InputContainer, PicturePreview } from './styles';

import {
  Control,
  Controller,
  UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form';

interface Props {
  buttonTitle: string;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  onSubmit: (event: GestureResponderEvent) => void;
}

export function PropertyForm(props: Props) {
  const { buttonTitle, control, getValues, onSubmit, setValue } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  const [imageUrl, setImageUrl] = useState(getValues('imageUrl') ?? '');

  const { COLORS } = useTheme();

  const convertToNumber = (value: string) => {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? '' : numericValue;
  };

  async function handleImage(imageUri: string) {
    setIsLoading(true);

    const resizedImage = await resizeImage(imageUri);

    if (!resizedImage) return;

    setImageUrl(resizedImage);

    setIsLoading(false);
  }

  const toggleShowCamera = () => {
    setShowCamera(true);
  };

  useEffect(() => {
    setValue('imageUrl', imageUrl);
  }, [imageUrl]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Imóvel é novo ou usado
            </Text>

            <Controller
              name="newHouse"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  ref={null}
                  error={error?.message}
                  list={['Novo', 'Usado']}
                  selectedOption={getValues('newHouse')}
                  setSelectedOption={(value) => {
                    setValue('newHouse', String(value));
                  }}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Imóvel se encontra
            </Text>

            <Controller
              name="rented"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  ref={null}
                  error={error?.message}
                  selectedOption={getValues('rented')}
                  list={['Alugado', 'Livre', 'Vendido']}
                  setSelectedOption={(value) =>
                    setValue('rented', String(value))
                  }
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Vagas / Garagens
            </Text>

            <Controller
              name="garage"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  ref={null}
                  error={error?.message}
                  selectedOption={String(getValues('garage'))}
                  list={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
                  setSelectedOption={(value) =>
                    setValue('garage', Number(value))
                  }
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Banheiros
            </Text>

            <Controller
              name="bathroom"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  ref={null}
                  error={error?.message}
                  selectedOption={String(getValues('bathroom'))}
                  list={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
                  setSelectedOption={(value) => {
                    setValue('bathroom', Number(value));
                  }}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Quartos
            </Text>

            <Controller
              name="rooms"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  ref={null}
                  error={error?.message}
                  selectedOption={String(getValues('rooms'))}
                  list={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
                  setSelectedOption={(value) =>
                    setValue('rooms', Number(value))
                  }
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Área em m²
            </Text>

            <Controller
              name="area"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  placeholder="200"
                  keyboardType="numeric"
                  error={error?.message}
                  value={getValues('area')?.toString() || ''}
                  onChangeText={(value) => {
                    setValue('area', convertToNumber(value));
                  }}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Preço R$
            </Text>

            <Controller
              name="price"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  placeholder="300"
                  keyboardType="numeric"
                  error={error?.message}
                  value={String(getValues('price') ?? '')}
                  onChangeText={(value) => {
                    setValue('price', convertToNumber(value));
                  }}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Endereço
            </Text>

            <Controller
              name="address"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  error={error?.message}
                  value={getValues('address')}
                  placeholder="Rua tabelião eneias 331 Quixadá"
                  onChangeText={(value) => setValue('address', value)}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Bairro
            </Text>

            <Controller
              name="neighborhood"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  error={error?.message}
                  placeholder="Campo novo"
                  value={getValues('neighborhood')}
                  onChangeText={(value) => setValue('neighborhood', value)}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Comentários / Detalhes
            </Text>

            <Controller
              name="comment"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  error={error?.message}
                  value={getValues('comment')}
                  onChangeText={(value) => setValue('comment', value)}
                  placeholder="Casa localizada próxima à escola e à praça, oferecendo uma vista magnífica."
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Nome do proprietário
            </Text>

            <Controller
              control={control}
              name="contactName"
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  placeholder="carlos"
                  error={error?.message}
                  value={getValues('contactName')}
                  onChangeText={(value) => setValue('contactName', value)}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Email do proprietário
            </Text>

            <Controller
              control={control}
              name="contactEmail"
              render={({ field, fieldState: { error } }) => {
                return (
                  <Input
                    {...field}
                    ref={null}
                    type={error?.type}
                    error={error?.message}
                    placeholder="carlos@gmail"
                    value={getValues('contactEmail')}
                    onChangeText={(value) => setValue('contactEmail', value)}
                  />
                );
              }}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Telefone do proprietário
            </Text>

            <Controller
              control={control}
              name="contactPhone"
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  maxLength={15}
                  keyboardType="numeric"
                  error={error?.message}
                  placeholder="(xx) xxxxx-xxxx"
                  value={getValues('contactPhone')}
                  onChangeText={(value) => {
                    setValue('contactPhone', phoneMask(value));
                  }}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Text weight="700" color={COLORS.GRAY_400} size={18}>
              Endereço do proprietário
            </Text>

            <Controller
              control={control}
              name="contactAddress"
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  ref={null}
                  error={error?.message}
                  value={getValues('contactAddress')}
                  placeholder="Rua Virgílio Távora 1345"
                  onChangeText={(value) => setValue('contactAddress', value)}
                />
              )}
            />
          </InputContainer>

          <Camera
            showCamera={showCamera}
            onRequestClose={() => setShowCamera(false)}
            onAccept={(uri: string) => handleImage(uri)}
          />

          {imageUrl.length ? (
            <>
              <Text weight="700" color={COLORS.GRAY_400} size={18}>
                Imagem do imóvel
              </Text>

              <PicturePreview source={{ uri: imageUrl }} />

              <Button
                type="PRIMARY"
                style={{ marginBottom: 8 }}
                onPress={() => setImageUrl('')}
              >
                Remover imagem
              </Button>
            </>
          ) : (
            <Button
              type="PRIMARY"
              onPress={toggleShowCamera}
              style={{ marginBottom: 8 }}
            >
              Tirar foto do imóvel
            </Button>
          )}

          <Button type="PRIMARY" onPress={onSubmit}>
            {buttonTitle}
          </Button>
        </>
      )}
    </>
  );
}
