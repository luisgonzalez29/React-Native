import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/container/login';
import Home from './src/container/home';
import Profile from './src/container/profile';
import Forum from './src/container/forum';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
        <Stack.Screen name="Registros" component={Home} />
        <Stack.Screen name="Luis" component={Profile} />
        <Stack.Screen name="Luis G" component={Forum} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
