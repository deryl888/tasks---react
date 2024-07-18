import './App.css';

import { Component } from "react";
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          tasks: [
            {id:0, name: "Task #001", user: "Ania", status: "ToDo", color: "primary"},
            {id:1, name: "Task #002", user: "Ola", status: "Done", color: "success"},
          ]
        }
    }

    createNewTask = (task) => {
      const newId = this.state.tasks.length;
      this.setState( {
        tasks: [
          ...this.state.tasks,
          { id: newId, name: task.newTaskName, user: task.user, status: "In progress", color: task.color }
        ]
      })
    }

    render() {
        return (
            <div className="App">
               <div>
                <Header createNewTaskCallback={this.createNewTask}/>
                <Tasks taskItems={this.state.tasks} />
               </div>
            </div>
        )
    }
}

export default App;
