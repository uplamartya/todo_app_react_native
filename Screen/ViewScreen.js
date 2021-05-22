import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View,SafeAreaView,TextInput,Image, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import {useState} from 'react'
const [inputId, setInputId] = useState('');
const dispatch = useDispatch();
const ViewScreen = () =>
{
    return (
        <View style={{flex:1, }}>
            <Text style={{ fontWeight:'bold',textAlign:'center', top:300,fontSize:20}}>Here your Task</Text>
            <TouchableOpacity style={[styles.button]}  >
              <Text style={{ textAlign: "center" }} onClick ={() => dispatch(deleteTodo(inputId), setInputId(''))}>delete</Text>
              </TouchableOpacity>
           </View>
        );
}

const mapStateToProps = (state) => {
    return{
        list : state.TodoReducers.list,
    }
}
const mapDispatchToProps = { addTodo , deleteTodo}

export default connect(mapStateToProps, mapDispatchToProps) (ViewScreen);