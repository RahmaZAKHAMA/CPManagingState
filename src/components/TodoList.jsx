import React, { useEffect, useState } from 'react'
import TodoModel from './TodoModel'
import AddTask from './AddTask';

const TodoList = () => {
   
    const [todos, setTodos] = useState(()=>{
        const savedTodos=localStorage.getItem('todos');
        return savedTodos? JSON.parse(savedTodos):
        
        [
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        completed: true,
      },
    ]});
   
useEffect(() => {
 localStorage.setItem('todos', JSON.stringify(todos)); 

  
}, [todos])


const taskCompleted = (id) => {
  setTodos(
    todos.map((el) => (el.id === id ? { ...el, completed: !el.completed } : el))
  );
};

const AddNEWTask=(Newtitle)=>{
    let newtask = { id: Math.random(), title: Newtitle, completed: false};
    setTodos([...todos, newtask]);
}

const DeleteTask=(id)=>{
    setTodos(todos.filter((el)=>el.id!=id))
}

const EditTask = (id, taskName) => {setTodos(
    todos.map((el)=>el.id===id?{...el,title:taskName}:el)
    
)
return true;
};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px",
        margin:"2%",
      }}
    >
      <AddTask AddNEWTask={AddNEWTask} />
      {todos.map((todo) => (
        <TodoModel
          todo={todo}
          key={todo.id}
          taskCompleted={taskCompleted}
          DeleteTask={DeleteTask}
          EditTask={EditTask}
        />
      ))}
    </div>
  );
}

export default TodoList