import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/themes';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' />
      <Routes />
    </ThemeProvider>
  );
}