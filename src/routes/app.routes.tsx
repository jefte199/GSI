import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { AddPropertyForm } from '../screens/AddPropertyForm';
import { InfoScreen } from '../screens/InfoScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='add_imovel'
        component={AddPropertyForm}
      />

      <Screen
        name='info'
        component={InfoScreen}
      />
    </Navigator>
  )
}
