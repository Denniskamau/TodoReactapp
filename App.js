/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Fancy} from './src/app/Fancy';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(){
    super();
    this.state={
      todos:[],
      newTodo:''
    }
  }

  handleChange(text){
    this.setState({newTodo:text })
  }

  handlePress(){
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo:''});

  }

  render() {
    return (
      <View style={styles.container }>
        <View style={styles.form}>
              <TextInput style={styles.input} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)}/>
              <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
                <Text style={styles.text}>Create</Text>
              </TouchableOpacity>
        </View>

        <View style={styles.todos}>
          <View style={styles.todo}>
            {this.state.todos.map((todo,i) => <Text key={i} style={styles.todoText}>{todo}</Text>)}
          </View>
        
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  form:{
    flexDirection:'row'
  },
  input:{
    flex:0.7,
    fontSize:24
  },
  button:{
    flex:0.3,
    borderWidth:1,
    height:50,
    borderColor:'blue',
    borderRadius:3,
    justifyContent:'center',
    alignItems:'center' 
  },
  text:{
    fontSize:24,
    fontWeight:'bold'
  },
  todos:{
    marginTop:60
  },
  todo:{
    marginBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'lightgrey'
  },
  todoText:{
    fontSize:24
  }
});
