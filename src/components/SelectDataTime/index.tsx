import React, { useState } from 'react';

import { Picker } from '@react-native-picker/picker';

import { Container } from './styles';

interface ChildComponentProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectDataTime = ({ setSelectedOption }: ChildComponentProps) => {
  const [day, setDay] = useState('1');
  const [month, setMonth] = useState('1');
  const [year, setYear] = useState('2023');

  const renderDays = () => {
    const days = [];

    for (let i = 1; i <= 31; i++) {
      days.push(<Picker.Item key={i} label={`${i}`} value={`${i}`} />);
    }

    return days;
  };

  const renderMonths = () => {
    const months = [];

    for (let i = 1; i <= 12; i++) {
      months.push(<Picker.Item key={i} label={`${i}`} value={`${i}`} />);
    }

    return months;
  };

  const renderYears = () => {
    const years = [];

    for (let i = 2023; i <= 2033; i++) {
      years.push(<Picker.Item key={i} label={`${i}`} value={`${i}`} />);
    }

    return years;
  };

  function createDay(Value: string) {
    setDay(Value);
    setSelectedOption(`${year}-${month}-${day}`);
  }

  function createMonth(Value: string) {
    setMonth(Value);
    setSelectedOption(`${year}-${month}-${day}`);
  }

  function createYear(Value: string) {
    setYear(Value);
    setSelectedOption(`${year}-${month}-${day}`);
  }

  return (
    <Container>
      <Picker
        style={{ flex: 1 }}
        selectedValue={day}
        onValueChange={(itemValue) => createDay(itemValue)}
      >
        {renderDays()}
      </Picker>

      <Picker
        style={{ flex: 1 }}
        selectedValue={month}
        onValueChange={(itemValue) => createMonth(itemValue)}
      >
        {renderMonths()}
      </Picker>

      <Picker
        style={{ flex: 1 }}
        selectedValue={year}
        onValueChange={(itemValue) => createYear(itemValue)}
      >
        {renderYears()}
      </Picker>
    </Container>
  );
};
