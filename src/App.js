import React from 'react';
import Todos from './components/Todos'
import Form from './components/Form'
class App extends React.Component{
  state ={
    todos:[
      {id:1, content:"buy some milk"},
      {id:2, content:"play some mario cart"}
    ]
  }

  deleteTodo =(id) =>{
    const todos = this.state.todos.filter(
      todo=>{
        return todo.id !== id
      }
    )
    this.setState({
    todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos =[...this.state.todos , todo]
    this.setState({
      todos:todos
    })

  }
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Form  addTodo = {this.addTodo}/>        
      </div>
    )
  }

}

export default App
