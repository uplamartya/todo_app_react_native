import React from 'react';
import {View,Text,StyleSheet} from "react-native";
const AddTask=(props)=>(
  <View Home={ styles.container}>
    <Text> Add new Task</Text>
  </View>
);
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
  });
  export default AddTask;