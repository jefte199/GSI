import styled from 'styled-components/native';

export const ActionsContainer = styled.View`
  gap: 32px;
  width: 100%;
  bottom: 80px;
  z-index: 100;
  padding: 20px 0;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const CameraContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  background-color: #000;
  justify-content: flex-end;
`;

export const SnapButton = styled.TouchableOpacity`
  margin: 20px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const PicturePreview = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PictureContainer = styled.View`
  flex: 1;
`;
