import styled, { DefaultTheme } from 'styled-components/native';

interface Props {
  theme: DefaultTheme;
  isCurrentImage: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  height: 300px;
  overflow: hidden;
  margin: 0px 0px 10px 0px;
  width: ${({ width }: { width: number }) => `${width}px`};
`;

export const Image = styled.Image`
  flex: 1;
  height: 200px;
  margin-top: 8px;
  border-radius: 6px;
`;

export const ImageNotFound = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

export const IndicatorsContainer = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.View`
  width: 8px;
  height: 8px;
  margin: 0px 4px;
  border-radius: 8px;
  background-color: ${(props: Props) => {
    const { isCurrentImage, theme } = props;
    return isCurrentImage ? theme.COLORS.ORANGE_100 : theme.COLORS.GRAY_300;
  }};
`;
