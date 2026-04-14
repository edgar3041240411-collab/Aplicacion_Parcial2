import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ExampleEvent from '../screens/ExampleEvent';
import Counter from '../screens/Counter';
import AboutMeScreen from '../screens/AboutMeScreen';
import FoodFavScreen from '../screens/FoodFavScreen';
import MoviesFavScreen from '../screens/MoviesFavScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ExampleEvent" component={ExampleEvent} />
      <Stack.Screen name="Counter" component={Counter} />
      {/* Esta línea activa el botón rosa */}
      <Stack.Screen name="AboutMe" component={AboutMeScreen} />
      <Stack.Screen name="FoodFav" component={FoodFavScreen} />
      <Stack.Screen name="MoviesFav" component={MoviesFavScreen} />
    </Stack.Navigator>
  );
}