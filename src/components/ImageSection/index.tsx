import { View } from 'react-native';

import { useTheme } from 'styled-components';

import { Text } from '../Text';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';

interface Props {
  imageUrls: string[];
  toggleShowCamera: () => void;
  onClearImageUrls: () => void;
}

export function ImageSection(props: Props) {
  const { COLORS } = useTheme();

  const { imageUrls, onClearImageUrls, toggleShowCamera } = props;

  return (
    <>
      {imageUrls.length ? (
        <>
          <Text weight="700" color={COLORS.GRAY_400} size={18}>
            {imageUrls.length > 1 ? 'imagens' : 'imagem'} do imóvel
          </Text>

          <View style={{ flex: 1 }}>
            <ImageCarousel images={imageUrls} />
          </View>

          <Button
            type="TERTIARY"
            onPress={toggleShowCamera}
            style={{ marginBottom: 8 }}
          >
            Tirar outra foto do imóvel
          </Button>

          <Button
            type="SECONDARY"
            onPress={onClearImageUrls}
            style={{ marginBottom: 8 }}
          >
            Remover {imageUrls.length > 1 ? 'imagens' : 'imagem'}
          </Button>
        </>
      ) : (
        <Button
          type="TERTIARY"
          onPress={toggleShowCamera}
          style={{ marginBottom: 8 }}
        >
          Tirar foto(s) do imóvel
        </Button>
      )}
    </>
  );
}
