import { Home } from '../screens/Home';
import { InfoScreen } from '../screens/InfoScreen';
import { AddProperty } from '../screens/AddProperty';
import { UpdateProperty } from '../screens/UpdateProperty';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />

      <Stack.Screen name="info" component={InfoScreen} />

      <Stack.Screen name="update" component={UpdateProperty} />

      <Stack.Screen name="add_imovel" component={AddProperty} />
    </Stack.Navigator>
  );
}
