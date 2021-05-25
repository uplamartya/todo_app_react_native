import React from 'react';
import {View,Text,StyleSheet, TextInput, Dimensions,} from "react-native";
const {width} = Dimensions.get ("screen");
const input= (props) =>(
  
    <View style={{ marginVertical:10,alignItems:'center'}}>
      <TextInput style = {styles.input} placeholder={ props.placeholder} />
     </View>
);
const styles = StyleSheet.create({
    input:{
      borderColor:'black',
      borderWidth:1,
      padding:10,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',

    },
  });
  export default input;

 
