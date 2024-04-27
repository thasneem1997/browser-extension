import React, { useEffect } from "react";
import "./todo.css";
import { v4 as uuid } from "uuid";

import { useState } from "react";

function Todo() {
  const [todo, settodo] = useState();
  const [todolist, settodolist] = useState([]);
  const handletodochange = (event) => {
    settodo(event.target.value);
  };
  useEffect(()=>{
    const usertodo=JSON.parse(localStorage.getItem("todo"));
    usertodo && settodolist(usertodo);

  },[])
  const handletodoclick = (event) => {
    if (event.key === "Enter") {
      const updatedtodolist = [
        ...todolist,
        { _id: uuid(), todo, iscompleted: false },
      ];
      settodolist(updatedtodolist);
      settodo(" ");
      localStorage.setItem("todo", JSON.stringify(updatedtodolist));
    }
  };
 const handleinputtodo=(todoid)=>{
    const updatedtodolist=todolist.map(todo=>todoid===todo._id?{...todo,iscompleted:!todo.iscompleted}:todo)
    settodolist(updatedtodolist)
    localStorage.setItem("todo",JSON.stringify(updatedtodolist))
 }
 const handletododelete=(todoid)=>{
    const updatedtodolist=todolist.filter(({_id}) => _id !== todoid);
    settodolist(updatedtodolist)
    localStorage.setItem("todo",JSON.stringify(updatedtodolist))
 }

  return (
    <div className="todo-container">
      <div className="todo-input-container">
        <input
          value={todo}
          onChange={handletodochange}
          onKeyDown={handletodoclick}
          className="todo-input"
        />
      </div>
      <div className="list-container">
        {todolist &&
          todolist.map(({ _id, todo, iscompleted }) => {
            return (
              <div key="_id" className="list-item">
                <input type="checkbox" id="check" onChange={()=>handleinputtodo(_id)} checked={iscompleted} />
                <label htmlFor="check" className={`${iscompleted ? "strike-through" : ""} labeltodo`}>
                  {todo}
                </label>
                <button className="todo-clear-btn" onClick={()=>handletododelete(_id)} >
                  <span class="material-icons-outlined">clear</span>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Todo;
