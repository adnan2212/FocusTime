// import React, { useState, useEffect } from 'react';
// import { Text, View } from 'react-native';
// import Display from '../screen/Display';
// import Weather from '../screen/Weather';
// import Settings from '../screen/SettingsScreen';
// import Calculator from '../screen/calculator/Calculator';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// const FocusTime = () => {
//   return(
//     <Display />
//   );
// }

// const WeatherScreen = () => {
//   return(
//     <Weather />  
//   );
// }

// const CalculatorScreen = () => {
//   return(
//     //<Text>Calculator here!</Text>
//      <Calculator />
//   );
// }

// const SettingsScreen = () => {
//   return(
//     // <Text>Settings Screen here!</Text>
//     <Settings />
//   );
// }

// const Navigation = () => {
//   return (
//     <>
//         <Tab.Navigator>
//           <Tab.Screen name="FocusTime" component={FocusTime} />
//           <Tab.Screen name="Weather" component={WeatherScreen} />
//           <Tab.Screen name="Calculator" component={CalculatorScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//     </>
//   );
// }

// export default Navigation;