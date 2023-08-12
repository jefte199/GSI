import theme from './src/themes';

import { useFonts } from 'expo-font';

import { Routes } from './src/routes';

import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

export default function App() {
  const [isFontsLoaded] = useFonts({
    ['Roboto-700']: require('./src/assets/fonts/Roboto-Bold.ttf'),
    ['Roboto-400']: require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!isFontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      <Routes />
    </ThemeProvider>
  );
}
