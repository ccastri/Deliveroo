import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import BasketScreen from './screens/BasketScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import BasketByPersonScreen from './screens/BasketByPersonScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="BasketByPerson" component={BasketByPersonScreen} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ presentation: 'modal', headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
