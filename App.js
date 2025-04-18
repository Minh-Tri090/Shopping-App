import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {

  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  function textInputChanged(textChanged){
    setTodoText(textChanged);
  }

  function addTodo(){
    setTodoList((currentTodoList) => [...currentTodoList, todoText]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textInputChanged} style={styles.TextInput} placeholder='your todo' />
        <Button onPress={addTodo} title='Add Todo'/>
      </View>
      <View style={styles.todoList}>
        {todoList.map((todo) => <Text key={todo}>{todo}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
    flex: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    borderBottomWidth: 1,
    borderBlockColor: 'grey',
    paddingBottom: 50,
    flex: 1,
    alignItems: 'center'
  },

  TextInput: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 8,
    marginRight: 8,
    width: '80%'
  },

  todoList: {
    flex: 6
  },
});
