import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Todos from './components/Todos';7
import { TODOS } from './data/data';

function App() {

  const [todos, setTodos] = useState(TODOS);
  const [newTodo, setNewTodo] = useState('');//

  console.log(todos);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (!newTodo.trim()) return;   // 
       setTodos([...todos, {
       id: Date.now(),
       todos: newTodo,
       completed: false
     }]); //
     setNewTodo('');
  }


  return (
   <div>
     <form onSubmit={handleSubmit}>
  <input 
    type="text"
    name="todo"
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
    placeholder="Enter a new task"
  />
  <button type="submit">Add Todo</button>
</form>

      <h2>My todos</h2>
      <Todos todos={todos} 
      setTodos={setTodos} 
      
      />
      
     
      <Button />
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />

   </div>
  )
}

export default App
