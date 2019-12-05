import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm.js'


class App extends Component{
 constructor(){
   super();
   this.state={
    todos:todos
   }
   this.handleAddTodo = this.handleAddTodo.bind(this);
 }
  handleAddTodo(todos){
    this.setState({
      todos:[...this.state.todos,todos]
    })
  }

  render() { 
    const todos = this.state.todos.map((todos,i) => {
      return <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header">
            <h3>{todos.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {todos.priority}
            </span>
          </div>
          <div className="card-body">
            <p>
               {todos.description}
            </p>
            <p>
               <mark>{todos.responsible}</mark> 
            </p>
          </div>
        </div>
      </div>      
      ;      
    })


  return (
    <div className="App">        
     <nav className="navbar navbar-dark bg-dark">

        <a href="http://localhost:3000/" className="text-white" >
          Tareas
          <span className="badge badge-pill badge-light ml-2" >
            {this.state.todos.length}
          </span>
        </a>                     
      </nav>
    <img src={logo} className="App-logo" alt="logo" />    
      <div className="container">
        <div className="row">
        <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
        {todos}
        </div>
      </div>
      
    </div>
  );
 }
}

export default App;
