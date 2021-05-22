import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Alert } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
//import{addTodo,deleteTodo, removeTodo } from './Screen/Index'
const HomeScreen = ({ navigation }) =>
{
const [inputData, setInputData] = useState('');
const list = useSelector((state=> state.TodoReducers.list));
const dispatch = useDispatch();
  return (
      <View style={[styles.container], { flex: 1, backgroundColor: 'dodgerblue' }}>
          <View style={styles.container1}>
              <TextInput keyboardType='twitter'
                  placeholder="Add your Task Here"
                  value ={ inputDta}
                  onChangeText={(inputData) => setInputData(inputData)}
                  textAlign='center'
                  style={styles.input}

                >  
              </TextInput>
              <TouchableOpacity style={[styles.button]}  >
              <Text style={{ textAlign: "center" }} onClick ={() => dispatch(addTodo(inputData),setInputData(''))}>Add to your Task</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button1]}
                  onPress=
                  {() => navigation.navigate('ViewScreen')}>
                  <Text style={
                      { textAlign: "center" }}>
                      Go to View your task</Text>
              </TouchableOpacity>
              
                   </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: 'blue'
    },
    textbox:
    {

    },
    button:
  {
    backgroundColor: 'gray',
    margin: 40,
        height: 40,
    width:310,
        justifyContent: 'center',
    alignSelf:'center',
        position: 'absolute',
    top:400
    
    },
    button1:
    {
      backgroundColor: 'gray',
      margin: 40,
          height: 40,
      width:310,
          justifyContent: 'center',
      alignSelf:'center',
          position: 'absolute',
      top:450
      
    },
    button2:
    {
      backgroundColor: 'gray',
      margin: 40,
          height: 40,
      width:310,
          justifyContent: 'center',
      alignSelf:'center',
          position: 'absolute',
      top:500
      
      },
    input:
  {
    height: 400,
        borderWidth: 1,
    backgroundColor:'tomato',
    position: 'relative',
    bottom: 10,
    width: 310,
    margin: 30,
  },
});

export default HomeScreen;