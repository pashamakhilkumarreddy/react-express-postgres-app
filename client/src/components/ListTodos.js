import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const reponse = await fetch(`http://localhost:4000/todos`);
      const formattedTodos = await reponse.json();
      if (formattedTodos.data) {
        setTodos([...JSON.parse(formattedTodos.data)]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (e, id) => {
    e.preventDefault();
    try { 
      const delTodo = await fetch(`http://localhost:4000/todos/${id}`, {
        method: 'DELETE'
      });
      if (delTodo.status === 200 && delTodo.ok === true) {
        setTodos(todos.filter(todo => todo.todo_id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <table className={`table is-fullwidth is-hoverable`}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { 
            todos.map((todo, index) =>
              <tr key={index.toString()}>
                <td>{index + 1}</td>
                <td className={`is-capitalized`}>{todo.description}</td>
                <td>
                  <EditTodo todo={todo}/>                  
                </td>
                <td>
                  <button className={`button is-danger is-light`} onClick={(e) => deleteTodo(e, todo.todo_id)}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;
