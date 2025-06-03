import { useState } from 'react';
import './style.css';
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const submit = () => {
        if (input.trim() === '') return; // Optional: prevent empty todos

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                text: input,
                id: Date.now(), // Better unique ID
            },
        ]);
        setInput('');
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
    };


    return (
        <div className='container'>
            <input
                type="text"
                placeholder="New Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={submit}>Submit</button>

          <ul className='todos-list'>
              {todos.map(({text, id}) => (
                  <li className='todo' key={id}>
                      <span>{text}</span>
                      <button  className='close' onClick={() => removeTodo(id)}>X</button>
                  </li>
              )) }
          </ul>
        </div>
    );
};

export default Todo;
