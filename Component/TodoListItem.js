import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.buttons}>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={() => onRemove(id)}>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

 const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
  },
  
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;