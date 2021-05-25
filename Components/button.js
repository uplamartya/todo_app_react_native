import React from 'react';
import {View,Text,StyleSheet, TextInput, Dimensions, TouchableOpacity} from "react-native";
const {width} = Dimensions.get ("screen");
const button=(props)=>(
  
      <TouchableOpacity style = {styles.button} onPress={ props.onPress} >
          <Text style={{ fontSize:18, color:"white", fontWeight:"600"}}>
              {props.text}
          </Text>
      </TouchableOpacity>
     
);
const styles = StyleSheet.create({
    button:{
      borderColor:'coral',
      borderWidth:0,
      padding:10,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',

    },
  });
  export default button;
