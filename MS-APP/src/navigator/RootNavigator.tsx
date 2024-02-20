import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import OnboardingScreen from '../../OnboardingScreen';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Model1 from '../components/Model1';
import Model2 from '../components/Model2';
import Model3 from '../components/Model3';
import Model4 from '../components/Model4';

const Stack = createStackNavigator();
export type RootStackParamList ={
  Home: undefined;
  Splash: undefined;
}

const RootNavigator = () => {
  const stack = createStackNavigator<RootStackParamList>();
  return (
   <Stack.Navigator 
    initialRouteName="Splash"
    screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#001B79' },
    }}   
  >
    <Stack.Screen 
      name='Splash' 
      component={OnboardingScreen} 
      options={{
        headerShown: false
      }}

      />
      <Stack.Screen 
      name="HomePage" 
      component={BottomTabNavigator} 
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen 
      name="SignUp" 
      component={Signup} 
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen 
      name="LogIn" 
      component={Login} 
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen 
      name="MsTesting" 
      component={Model1}
      />
      <Stack.Screen 
      name="floodlight" 
      component={Model2}
      />
      <Stack.Screen 
      name="Image" 
      component={Model3}
      />
      <Stack.Screen 
      name="Segmation" 
      component={Model4}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator