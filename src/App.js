import React from 'react';
import './App.css';
import Todos from './components/Todos'; 
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from "uuid"; 

class App extends React.Component {
  
  state ={
    todos:[
        {
            id : uuid(),
            title : "투두리스트 만들기",
            isCompleted : false
        },
        {
            id : uuid(),
            title : "화면 만들기",
            isCompleted : false
        },
        {
            id : uuid(),
            title : "밥먹기",
            isCompleted : false
        }
    ]
  }
  
  //mark completed
  markComplete = (id) => {

    this.setState({todos : this.state.todos.map(todo => {
      if (todo.id === id) {
        //console.log(todo.isCompleted);
        todo.isCompleted = !todo.isCompleted;
        //console.log(todo.isCompleted);
      }
      return todo;
    }
    )})
  }
  //delete todo
  delTodo = (id) => {
    //console.log("del" +id);
    this.setState({ todos : [...this.state.todos.filter(todo => 
      todo.id !== id)] });
  }

  addTodo = (title) => {
    console.log(title);
    const newTodo ={
      id : uuid(),
      title : title,
      isCompleted :false
    }
    this.setState({ todos : [...this.state.todos, newTodo]})
  }

  render(){
    return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo = {this.addTodo} />
            <Todos todos = {this.state.todos} markComplete ={this.markComplete}
            delTodo = {this.delTodo} 
        />
          </div>
        </div>
    );
  }
}

export default App;


