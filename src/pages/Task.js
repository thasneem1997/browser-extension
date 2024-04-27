import React, { Fragment, useEffect, useState } from "react";
import { useBrowser } from "../context/Browsercontext";
import { Qoutes } from "../db/Qoutes";
import Todo from "../component/Todo";

const index = Math.floor(Math.random() * Qoutes.length);
const Qouteslist = Qoutes[index].quote;
function Task() {
  const { time, message, name, browserdispatch, task } = useBrowser();
  const [ischecked, setischecked] = useState(false);
  const [istodo, setistodo] = useState(false);

  useEffect(() => {
    getcurrenttime();
  }, [time]);
  useEffect(() => {
    const userTask = localStorage.getItem("task");
    browserdispatch({ type: "TASK", payload: userTask });
    if(new Date().getDate()!==Number(localStorage.getItem("date")))
    {
      localStorage.removeItem("task");
      localStorage.removeItem("date");

      localStorage.removeItem("checkstatus");
    }
  }
  , []);
  useEffect(() => {
    const checkstatus = localStorage.getItem("checkstatus");
    if (checkstatus === "true") {
      setischecked(true);
    } else {
      setischecked(false);
    }
  }, []);
  const taskcomplete = (event) => {
    if (event.target.checked) {
      setischecked((ischecked) => !ischecked);
    } else {
      setischecked((ischecked) => !ischecked);
    }
    localStorage.setItem("checkstatus", !ischecked);
  };
  function getcurrenttime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hour = hours < 10 ? "0" + hours : hours;
    const min = minutes < 10 ? "0" + minutes : minutes;
    const currenttime = `${hour}: ${min}`;
    setTimeout(getcurrenttime, 1000);
    browserdispatch({ type: "TIME", payload: currenttime });
    browserdispatch({ type: "MESSAGE", payload: hours });
  }
  const handlefocus = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      browserdispatch({ type: "TASK", payload: event.target.value });
      localStorage.setItem("task", event.target.value);
      localStorage.setItem("date", new Date().getDate());
    }
  };
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  const handlecloseclick = (event) => {
    browserdispatch({ type: "CLOSE" });
    setischecked(false);
    localStorage.removeItem("task");

    localStorage.removeItem("checkstatus");
  };
  const handletodoclick = (event) => {
    setistodo((istodo) => !istodo);
  };
  return (
    <div className="task-container">
      <h1>{time}</h1>
      <span>
        {message},{name}
      </span>
      {name != null && task === null ? (
        <Fragment>
          <h2>what is your main focus today</h2>
          <form onSubmit={handlesubmit}>
            <input className="inputbox" onKeyDown={handlefocus} />
          </form>
        </Fragment>
      ) : (
        <Fragment>
          <h2>Todays focus</h2>
          <input
            type="checkbox"
            onChange={taskcomplete}
            checked={ischecked}
            className="inputstyle"
          />
          <label
            htmlfor="checkstyle"
            className={`${ischecked ? "strike-through" : ""}`}
          >
            {task}
          </label>
          <button className="buttonclose">
            <span
              class="material-icons-outlined"
              onClick={handlecloseclick}
              style={{ fontSize: "30px", marginLeft: "20px" }}
            >
              clear
            </span>
          </button>
        </Fragment>
      )}
      <div>
        {" "}
        <p className="qoutes">{Qouteslist}</p>
      </div>
      {istodo && <Todo />}
      <div>
        <button className="todo" onClick={handletodoclick}>
          Todo
        </button>
      </div>
    </div>
  );
}

export default Task;
