import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Alert } from "react-native"
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) =>
{
  return (
      <View style={[styles.container], { flex: 1, backgroundColor: 'dodgerblue' }}>
          <View style={styles.container1}>
              <TextInput keyboardType='twitter'
                  placeholder="Add your Task Here"
                  multiline={true}
                  textAlign='center'
                  style={styles.input}
                >  
              </TextInput>
              <TouchableOpacity style={[styles.button]}  >
              <Text style={{ textAlign: "center" }}>Add to your Task</Text>
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
        top: 400,
    marginBottom:50,
    
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
        top: 450,
      marginBottom:50
      
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
        fontSize: 20,
       fontWeight:'bold'
  },
});

export default HomeScreen;