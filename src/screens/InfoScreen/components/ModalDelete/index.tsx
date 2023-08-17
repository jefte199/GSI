import { Modal } from 'react-native';

import { Container, ContentModal } from './styles';

import { Text } from '../../../../components/Text';
import { Button } from '../../../../components/Button';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  onDeleteHouse: () => void;
}

export function ModalDelete({ isOpen, onDeleteHouse, toggle }: Props) {
  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="slide"
      onRequestClose={toggle}
    >
      <Container>
        <ContentModal>
          <Text size={14} weight="700" style={{ marginBottom: 16 }}>
            Tem certeza de que deseja excluir este imóvel?
          </Text>

          <Button type="SECONDARY" onPress={onDeleteHouse}>
            Sim
          </Button>

          <Button type="PRIMARY" onPress={toggle}>
            Não
          </Button>
        </ContentModal>
      </Container>
    </Modal>
  );
}
