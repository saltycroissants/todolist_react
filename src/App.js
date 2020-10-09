import React from 'react';
import './App.css';
import Todos from './components/Todos'; 

class App extends React.Component {
  
  state ={
    todos:[
        {
            id : 1,
            title : "투두리스트 만들기",
            isCompleted : false
        },
        {
            id : 2,
            title : "화면 만들기",
            isCompleted : false
        },
        {
            id : 3,
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

  render(){
    return (
        <div className="App">
        <h1>이 지독한 투두..</h1>
        <Todos todos = {this.state.todos} markComplete ={this.markComplete}
        delTodo = {this.delTodo} 
        />
        </div>
    );
  }
}

export default App;


