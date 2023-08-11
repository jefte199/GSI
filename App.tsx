import theme from './src/themes';

import { Routes } from './src/routes';

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      <Routes />
    </ThemeProvider>
  );
}
