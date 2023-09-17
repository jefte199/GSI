import { View } from 'react-native';

import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';

interface Props {
  imageUrls: string[];
  onClearImageUrls: () => void;
  onAddImageGallery: () => void;
}

export function GallerySection(props: Props) {
  const { imageUrls, onClearImageUrls, onAddImageGallery } = props;

  return (
    <>
      {imageUrls.length ? (
        <>
          <View style={{ flex: 1 }}>
            <ImageCarousel images={imageUrls} />
          </View>

          <Button
            type="TERTIARY"
            onPress={onAddImageGallery}
            style={{ marginBottom: 8 }}
          >
            Selecionar outra imagem
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
          onPress={onAddImageGallery}
          style={{ marginBottom: 8 }}
        >
          Selecionar imagem da galeria
        </Button>
      )}
    </>
  );
}
