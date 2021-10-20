import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Display from '../screen/Display';
import Weather from '../screen/Weather';
import Settings from '../screen/SettingsScreen';
import Calculator from '../screen/calculator/Calculator';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import Chatbot from '../screen/Chatbot/Chatbot';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

const FocusTime = () => {
    return(
      <Display />
    );
  }
  
const WeatherScreen = () => {
    return(
      <Weather />  
    );
  }
  
  const CalculatorScreen = () => {
    return(
       <Calculator />
    );
  }
  
  const SettingsScreen = () => {
    return(
      <Settings />
    );
  }

  const MapsScreen = () => {
    return(
      <Text>Map Screen here!</Text>
    )
  }

  const ChatbotScreen = () => {
    return(
      <Chatbot />
    )
  }

export const SignedInStack = () => (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'FocusTime') {
              iconName = "md-watch";
            } else if (route.name === 'Weather') {
              iconName = 'md-cloud'
            } else if (route.name === 'Settings') {
              iconName = 'md-settings'
            } else if (route.name === 'Calculator') {
              iconName = 'md-calculator'
            } else if (route.name === 'Map') {
              iconName = 'md-map'
            } else if (route.name === 'Chatbot') {
              iconName = 'md-person'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: "none",
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="FocusTime" component={FocusTime} />
          <Tab.Screen name="Weather" component={WeatherScreen} />
          <Tab.Screen name="Calculator" component={CalculatorScreen} />
          {/* <Tab.Screen name="Map" component={MapsScreen} /> */}
          <Tab.Screen name="Chatbot" component={ChatbotScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)
