import React from "react";
import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native'
import Constants from 'expo-constants'

let id = 0;

const styles = StyleSheet.create({

  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },  
  mainContainer: {
    paddingTop: Constants.statusBarHeight
  },
  fill: {
    flex: 1
  }
})

// <li> -> <View>
// <button> -> <Button>
const Todo = (props) => (
  <View style={styles.todoContainer}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle}/>
    <Button onPress={props.onDelete} title="delete" />
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }//constructor

  addTodo() {
    id++
    const text = `TODO number ${id}`
    this.setState({
      todos: [...this.state.todos, 
        {id: id, text: text, checked: false}
      ]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }// return
      })// todos: state.map( <-
    })// this.state ({ <-
  }// toggleTodo() { <-

  render() {
    return (
      <View style={[styles.mainContainer, styles.fill]}>
        <Text> TODO COUNT: {this.state.todos.length}</Text>
        <Text> UNCHECKED TODO COUNT: {this.state.todos.filter(todo => todo.checked !== true).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add TODO" />
        <ScrollView style={styles.fill}>
          {this.state.todos.map(todo => 
            <Todo
            onDelete = {() => this.removeTodo(todo.id)}
            onToggle = {() => this.toggleTodo(todo.id)}
            todo={todo} 
            />)
          }
        </ScrollView>
      </View>
    )// return
  }// render
}// class