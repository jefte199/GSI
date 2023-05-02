import React from 'react';
import { Container } from './styles';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { Select } from '../../Components/Select';

export function AddPropertyForm() {
  return (
    <Container>
      <Header showBackButton={true} />

      <Input
        placeholder='Preço'
        autoCorrect={false} />

      <Select />
    </Container>

  )
}

/*
  Alugar ou vender - Select
  Preço - input
  Quartos - Select
  Bainheiros - Select
  Vagas - Select
 */
