// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cards from './src/Screens/Cards';
import Accounting from './src/Screens/Accounting';

const Stack = createNativeStackNavigator();

function App() {
  //My First Step (Change).
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Cards} />
      <Stack.Screen name="Accounting" component={Accounting} />
      </Stack.Navigator>
  
    </NavigationContainer>
  );
}

export default App;