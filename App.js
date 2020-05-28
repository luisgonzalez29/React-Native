import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/container/login';
import Home from './src/container/home';
import Profile from './src/container/profile';
import ProfileOne from './src/container/profileOne';
import ProfileTwo from './src/container/profileTwo';
import ProfileThree from './src/container/profileThree';
import ProfileFour from './src/container/profileFour';
import Forum from './src/container/forum';
import ForumOne from './src/container/forumOne';
import ForumTwo from './src/container/forumTwo';
import ForumThree from './src/container/forumThree';
import ForumFour from './src/container/forumFour';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
        <Stack.Screen name="Registros" component={Home} />
        <Stack.Screen name="Luis" component={Profile} />
        <Stack.Screen name="Shantal" component={ProfileOne} />
        <Stack.Screen name="Alfonso" component={ProfileTwo} />
        <Stack.Screen name="Torres" component={ProfileThree} />
        <Stack.Screen name="Tony" component={ProfileFour} />
        <Stack.Screen name="Luis G" component={Forum} />
        <Stack.Screen name="Shantal L" component={ForumOne} />
        <Stack.Screen name="Alfonso A" component={ForumTwo} />
        <Stack.Screen name="Tony Z" component={ForumFour} />
        <Stack.Screen name="Luis T" component={ForumThree} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
