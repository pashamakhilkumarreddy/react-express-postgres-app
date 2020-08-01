import React, { useState } from 'react';

const AddTodo = () => {
  const [description, setDescription] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:4000/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      if (response.status === 200 && response.ok === true) { 
        setDescription('');
        window.location = '/';
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={`box mt-4`}>
      <form className={`todo-form`} onSubmit={submitForm}>
        <div className={`field`}>
          <label htmlFor="add-todo" className={`label`}>Add a new Todo</label>
          <div className={`control`}>
            <input id="add-todo" className={`input`} type="text" placeholder="Add a New Todo" value={description} onChange={ e => setDescription(e.target.value) } />
          </div>
        </div>
        <div className={`field is-grouped`}>
          <div className={`control`}>
            <button className={`button is-link`}>Submit</button>
          </div>
          <div className={`control`}>
            <button className={`button is-link is-light`} onClick={e => { e.preventDefault(); setDescription('') }}>Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
