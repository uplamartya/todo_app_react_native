import React from 'react';
import { View, Text, StyleSheet ,TextInput, Button} from "react-native";
import * as Components from "./Components/index";
import {connect} from "react-redux";
import * as ActionTypes from " ./store/actionTypes"
const Welcome = (props) => {
  const [name, setName]= useState("");
  const handlerInput =()=> {
    props.addUser(name);
    props.navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text>Welcome { props.user.username}</Text>

      <TextInput  onChangeText = {(text) => setName (text)} placeholder="what should we call you"/>
      <Button onPress = {() => handlerInput()} text="Enter"/>

    </View>
  );
};
const mapStateToProps = (state) =>({ user: state.user });
const mapDispatchToProps =(dispatch) =>({
addUser:(username) =>
dispatch({
  type: ActionTypes.ADD_USER,
  payload:{
    username,
  },
}),
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Welcome);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
