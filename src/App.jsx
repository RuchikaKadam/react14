import TaskInput from "./components/TaskInput";
import "./App.css";
import React, {useState} from 'react';
import TaskItem from "./components/TaskItem";

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setGroceryList([...groceryList, newTask]);
  };
  function deleteTask(deleteTaskName){
    setGroceryList(groceryList.filter(task => task.taskName !== deleteTaskName))
  }
  function toggleCheck(taskName) {
    setGroceryList((prevGroceryList) =>
    prevGroceryList.map((task) =>
      task.taskName === taskName ? {...task, checked : !task.checked} :task,
    ),
    );
  }
  return (
    <>
      <div className="container">
        <h1>Grocery Bud</h1>

        <TaskInput addTask={addTask} />

        <div className="groceryList">
          <ul className="list-items">
            {groceryList.map((task,key) => (
              <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;