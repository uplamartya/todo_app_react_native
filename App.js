// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();
// import HomeScreen from './Screen/HomeScreen'
// import ViewScreen from './Screen/ViewScreen'
// import TodoReducers from './Screen/TodoReducers'
//  import { Provider } from 'react-redux'
//  import { creatStore } from 'redux'

// // const initialState = {
// // todo_list =[]
// // }
// // const reducer = (state = initialState,action) => {
// //   return state;
// // }

//  const store = creatStore( )
// const App = () => {
//   return (
//     render(
//           <Provider store = {store}>
//           <ViewScreen/>
//         </Provider>
//     ),
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="ViewScreen" component={ViewScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   );
// }

// export default App;
// import React, {useState} from 'react';
// import TodoList from './components/TodoList';
// import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
// import TodoInsert from './components/TodoInsert';

// const App = () => {
 
//   const [todos, setTodos] = useState([]);

//   const addTodo = text => {
//     setTodos([
//       todos,
//       {id: Math.random().toString(), textValue: text, checked: false},
//     ]);
//   };

//   const onRemove = id => e => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

  

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.appTitle}>Hello Todolist</Text>
//       <View >
//         <TodoInsert onAddTodo={addTodo} />
//         <TodoList todos={todos} onRemove={onRemove}  />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3143e8',
//   },
//   appTitle: {
//     color: '#fff',
//     fontSize: 36,
//     marginTop: 30,
//     marginBottom: 30,
//     fontWeight: '300',
//     textAlign: 'center',
//     backgroundColor: '#3143e8',
//   },
//   card: {
//     backgroundColor: '#fff',
//     flex: 1,
//     borderTopLeftRadius: 10, 
//     borderTopRightRadius: 10, 
//     marginLeft: 10,
//     marginRight: 10,
//   },
// });

// export default App;
