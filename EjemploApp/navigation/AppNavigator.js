import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos todas tus pantallas de la carpeta screens
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
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Stack.Screen name="ExampleEvent" component={ExampleEvent} options={{ title: 'Eventos' }} />
      <Stack.Screen name="Counter" component={Counter} options={{ title: 'Contador' }} />
      
      {/* Esta línea registra la pantalla y quita el error de "not handled" */}
      <Stack.Screen name="AboutMe" component={AboutMeScreen} options={{ title: 'Sobre Mí' }} />
      
      <Stack.Screen name="FoodFav" component={FoodFavScreen} options={{ title: 'Mis Comidas' }} />
      <Stack.Screen name="MoviesFav" component={MoviesFavScreen} options={{ title: 'Mis Películas' }} />
    </Stack.Navigator>
  );
}