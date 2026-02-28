import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; // Cambiado a Stack estándar

import HomeScreen from "../screens/HomeScreen";
import ExampleEvent from "../screens/ExampleEvent";
import CounterScreen from "../screens/Counter";


const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }} 
      />
      <Stack.Screen 
        name="ExampleEvent" 
        component={ExampleEvent} 
        options={{ title: 'Eventos' }} 
      />
      <Stack.Screen 
        name="Counter" 
        component={CounterScreen} 
        options={{ title: 'Contador' }} 
      />
    </Stack.Navigator>
  );
}