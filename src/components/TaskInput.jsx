import React,{useState} from 'react'

const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');
    function handleInputValue(e) {
        setTask(e.target.value)
    }
    function handleAddTask (e){
        e.preventDefault();
        if(task.trim()===0) return;
        addTask (task);
        setTask('');
    }
  return (
    <form className='inputField' onSubmit={handleAddTask}>
        <input style={{width:"80%"}} type="text" value={task} placeholder='Add your grocery items...' onChange={handleInputValue}/>
        <button className='input-btn'>+</button>
    </form>
  )
}

export default TaskInput