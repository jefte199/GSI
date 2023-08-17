import { Text } from '../Text';

import { forwardRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

import { useTheme } from 'styled-components/native';

interface Props extends TextInputProps {
  type?: string;
  error?: string;
}

export const Input = forwardRef((props: Props, ref) => {
  const { error = '', type, ...rest } = props;

  const { value = '' } = rest;

  const isEmailInvalid = type === 'email';
  const hasError = error.trim().length > 0;
  const isEmptyValue = !value.trim().length;

  const { COLORS } = useTheme();

  const shouldShowError = hasError && (isEmptyValue || isEmailInvalid);

  return (
    <Container>
      <TextInput
        {...rest}
        isError={shouldShowError}
        placeholderTextColor={COLORS.GRAY_300}
      />

      {shouldShowError && (
        <Text weight="700" color="#ec4561" style={{ marginTop: 4 }}>
          {error}
        </Text>
      )}
    </Container>
  );
});
