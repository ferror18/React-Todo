import React from 'react';
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
      super();
      this.state = {
        allTasks: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ]
      }
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggle = obj => {return {...obj, completed: !obj.completed}};
  addTodo = (event) => {
    event.preventDefault()
      const arr = {
          id: Date.now(),
          completed: false,
          task: document.querySelector('input').value
      }
      console.log({...this.state, allTasks: [...this.state.allTasks, arr]})
      
      this.setState({...this.state, allTasks: [...this.state.allTasks, arr]})
  };
  clearComplete = x=>{};
  render() {
    return (
      <div>
        <h1>Things Todo...</h1>
        <ul>
        {   
          this.state.allTasks.map((task)=>{
           return <Todo key={task.id} taskData={task}/> 
          })
        }
        <TodoForm addTodo={this.addTodo} clearComplete={this.clearComplete} />
        </ul>
      </div>
    );
  }
}

export default App;
