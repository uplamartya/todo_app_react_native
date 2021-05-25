import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Screens from './screens/Index';

const { Screen, Navigator } = createStackNavigator();
import { Provider } from "react-redux";
import store from "./store/store"
const App = (props) => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        <Screen name="Welcome" component={Screens.Welcome} />
        <Screen name="Home" component={Screens.Home} />
        <Screen name=" AddTask"component ={Screens.AddTask}/>
      </Navigator>
    </NavigationContainer>
  </Provider>
);
export default App;



