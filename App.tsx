import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/themes';
//import { Home } from './src/screens/Home';
//import { AddPropertyForm } from './src/screens/AddPropertyForm';
import { InfoScreen } from './src/screens/InfoScreen';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' />
      <InfoScreen />
    </ThemeProvider>
  );
}