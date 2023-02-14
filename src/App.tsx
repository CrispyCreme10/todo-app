import { useRef, useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputRef.current !== null) {
      const todo = inputRef.current.value;
      inputRef.current.value = '';
      setTodos(prev => [...prev, todo])
    }
  }

  const removeTodo = (idx: number) => {
    setTodos(todos.filter((val, index) => index !== idx));
  }

  const editTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strikeClass = 'strike';

    if (e.currentTarget.checked) {
      e.currentTarget.nextElementSibling?.classList.add(strikeClass);
    } else {
      e.currentTarget.nextElementSibling?.classList.remove(strikeClass);
    }
  }

  return (
    <div className='App'>
      <h1>TODO List</h1>
      <div className='inputs'>
        <input ref={inputRef} type='text' placeholder='Enter TODO' />
        <button type='submit' onClick={addTodo}>Add</button>
      </div>
      <div className='todos'>
        {todos.map((todo, idx) => 
          <div key={idx} className='todo-line'>
            <button id='remove-btn' type='button' onClick={() => removeTodo(idx)}>X</button>
            <input type='checkbox' onChange={e => editTodo(e)}/>
            <span>{todo}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
