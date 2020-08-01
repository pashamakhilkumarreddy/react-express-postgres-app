import React, { useState } from 'react';

const EditTodo = ({todo}) => {
  const [showmodal, setModalDisplay] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const toggleModalDisplay = () => {
    setModalDisplay(!showmodal);
  }

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:4000/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (response.status === 200 && response.ok === true) {
        setModalDisplay(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <button className={`button is-primary is-light`} onClick={toggleModalDisplay}>Edit</button>
      <div className={'modal ' + (showmodal ? 'is-active': '') }>
        <div className="modal-background"></div>
        <div className="modal-content">
            <div className={`box mt-4`}>
            <form className={`todo-form`} onSubmit={updateDescription}>
              <div className={`field`}>
                <label htmlFor="add-todo" className={`label`}>Edit Todo</label>
                <div className={`control`}>
                  <input id="add-todo" className={`input`} type="text" placeholder="Edit Todo Description" value={description} onChange={ e => setDescription(e.target.value) } />
                </div>
              </div>
              <div className={`field is-grouped`}>
                <div className={`control`}>
                  <button className={`button is-link`}>Edit</button>
                </div>
                <div className={`control`}>
                  <button className={`button is-link is-light`} onClick={toggleModalDisplay}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button className={`modal-close is-large`} aria-label="close" onClick={toggleModalDisplay}></button>
      </div>
    </>
  );
}

export default EditTodo;
