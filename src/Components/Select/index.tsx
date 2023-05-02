import { useState } from 'react';
import { Container, StyledPicker } from "./styles";
import { Picker } from '@react-native-picker/picker';

export function Select() {
  const data = ['Alugar', 'Vender']
  const [selectedOption, setSelectedOption] = useState<string>('');

  function handleSelect() {
    console.log("value")
    setSelectedOption("Alugar");
  }
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Container>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

    </Container >
  )
}