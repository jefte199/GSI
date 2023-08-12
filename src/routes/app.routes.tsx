import { Home } from '../screens/Home';
import { InfoScreen } from '../screens/InfoScreen';
import { AddPropertyForm } from '../screens/AddPropertyForm';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />

      <Stack.Screen name="add_imovel" component={AddPropertyForm} />

      <Stack.Screen name="info" component={InfoScreen} />
    </Stack.Navigator>
  );
}
