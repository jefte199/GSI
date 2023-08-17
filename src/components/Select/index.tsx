import { Text } from '../Text';

import { forwardRef } from 'react';

import { Container } from './styles';

import { Picker } from '@react-native-picker/picker';

interface ChildComponentProps {
  list: string[];
  error?: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export const Select = forwardRef((props: ChildComponentProps, ref) => {
  const { error = '', list, selectedOption, setSelectedOption } = props;

  const isError = error.trim().length > 0;
  const isOptionSelected = selectedOption.length;

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <>
      <Container isError={isError && !isOptionSelected}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => handleSelect(itemValue)}
        >
          {list.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </Container>

      {isError && !isOptionSelected && (
        <Text weight="700" color="#ec4561" style={{ marginTop: 4 }}>
          {error}
        </Text>
      )}
    </>
  );
});
