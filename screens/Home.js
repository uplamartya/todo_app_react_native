// import React from 'react';
// import {View,Text,StyleSheet} from "react-native";
// import {connect} from "react-redux";
// const Home=(props)=>{
//   return(
//   <View Home={ styles.container}>
//     <Text> Home Screen</Text>
//     <Text> Welcome{ props,user.username}</Text>
//   </View>
// );
// };
// const mapStateToProps = (state) =>({ user: state.user });
// const mapDispatchToProps =(dispatch) =>({

// });

// const connectComponent = connect(mapStateToProps, mapDispatchToProps);
// export default connectComponent(Home);
// const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//     },
//   });
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




   