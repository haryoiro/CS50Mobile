import React from "react";
import { render } from "react-dom";
import './styles.css'

const Todo = (props) => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
    <button onClick={props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
)

let id = 0;

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }//constructor

  addTodo() {
    const text = prompt("TODO text please!")
    this.setState({
      todos: [...this.state.todos, 
        {id: id++, text: text, checked: false}
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
        }
      })
    })
  }

  render() {
    return (
      <div className=".App">
        <div> TODO COUNT: {this.state.todos.length} </div>
        <div> UNCHECKED TODO COUNT: {this.state.todos.filter(todo => todo.checked !== true).length}</div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => 
            <Todo
            onDelete = {() => this.removeTodo(todo.id)}
            onToggle = {() => this.toggleTodo(todo.id)}
            todo={todo} 
            />)
          }
        </ul>
      </div>
    )// return
  }// render
}// class

render(<App />, 
  document.getElementById("root")
)