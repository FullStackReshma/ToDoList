import React ,{FC,useState,ChangeEvent} from 'react';
import './App.css';
import {ITask} from './Interfaces';

const App:FC= () => {

  const[task,setTask] = useState<string>("");
  const[deadline,setDeadline] = useState<number>(0);
  const[todoList,setTodoList] = useState<ITask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void => {  //always mention the return type for a function(here it is void)
    if(event.target.value === 'task') {
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value)) //returns string so convert to Number (in javascript/typescript)
    }
  }

  const addTask = (): void => {       //why void? because it not returns any thing
      const newTask = { 
        task: task,
        deadline: deadline
      };
     console.log("taskNmae::",newTask.task)
     console.log("todolist::",todoList)  
     setTodoList([...todoList,newTask]);   //occurs error bcz we havent decide the type of todoList, which is object like {task:"homwwork",deadline:5}.To define the type, In typescript we go with Interface
   
    }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input 
              type="text"  
              placeholder="Task..." 
              name= "task" 
              onChange={handleChange}
              />
          <input 
              type="number" 
              placeholder="No of Days..." 
              name="deadline"
              onChange={handleChange}
              />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
