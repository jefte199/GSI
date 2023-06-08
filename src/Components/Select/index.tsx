import { Container } from "./styles";
import { Picker } from '@react-native-picker/picker';

interface ChildComponentProps {
  List: string[];
  SelectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export function Select({ List, SelectedOption, setSelectedOption }: ChildComponentProps) {
  function handleSelect(value: string) {
      setSelectedOption(value);
  }
  return (
    <Container>
      <Picker
        selectedValue={SelectedOption}
        onValueChange={(itemValue, itemIndex) =>
          handleSelect(itemValue)
        }>
        {
          List.map((item) => <Picker.Item key={item} label={item} value={item} />)
        }
      </Picker>

    </Container >
  )
}
