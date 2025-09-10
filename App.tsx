/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import IngredientScreen from './screens/IngredientScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Party Menu' }} />
        <Stack.Screen name="Ingredient" component={IngredientScreen} options={{ title: 'Ingredients' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
