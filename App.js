import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from './Screen/HomeScreen'
import ViewScreen from './Screen/ViewScreen'
import TodoReducers from './Screen/TodoReducers'
 import { Provider } from 'react-redux'
 import { creatStore } from 'redux'

// const initialState = {
// todo_list =[]
// }
// const reducer = (state = initialState,action) => {
//   return state;
// }

 const store = creatStore( )
const App = () => {
  return (
    render(
          <Provider store = {store}>
          <ViewScreen/>
        </Provider>
    ),
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ViewScreen" component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
