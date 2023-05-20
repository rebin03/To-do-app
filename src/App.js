import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const addTask = () => {
    if (toDo === "") return;
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  }
  const deleteTodo = (idToDelete) =>
    setToDos((currentTodos) =>
      currentTodos.filter((toDo) => toDo.id !== idToDelete)
    );

  return (
    <div className="app">
      <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
      <div className='adding'>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={addTask} className="fas fa-plus"></i>
        </div>

        {toDos.map((obj) => {
          return (
            <div className="todos">
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(obj);
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    }))

                  }} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => deleteTodo(obj.id)} className="fas fa-times"></i>
                </div>
              </div>
            </div>)
        })}
      </div>
      <div className="completed">
        <h2><u>Completed Tasks:</u></h2>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div>

                <p>✅ {obj.text}</p>
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;