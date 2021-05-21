import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View,SafeAreaView,TextInput,Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OtpScreen from './Screen/OtpScreen';
import HomeScreen from './Screen/HomeScreen';
import axios from 'axios';
import TabbedScreen from './Screen/TabbedScreen'
const Stack = createStackNavigator();

const App = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabbedScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="TabbedScreen" component={TabbedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;