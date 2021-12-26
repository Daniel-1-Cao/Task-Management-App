import React, { useState, useRef } from "react";
import ToDo from "./components/ToDo";
import InProcess from "./components/InProcess";
import Finished from "./components/Finished";

function App() {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [inProcessTasks, setInProcessTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const pageRef = useRef(null);

  const handleMove = (task, _moveFrom, xCor) => {
    const pageDiv = pageRef.current;
    const width = pageDiv.clientWidth / 3;
    var copyTasks;
    if (xCor < width) {
      copyTasks = toDoTasks;
      copyTasks.push(task);
      console.log(copyTasks);
      setToDoTasks(copyTasks);
    } else if (xCor < 2 * width) {
      debugger;
      copyTasks = inProcessTasks;
      copyTasks.push(task);
      console.log(copyTasks);
      setInProcessTasks(copyTasks);
      debugger;
    } else {
      setFinishedTasks(...finishedTasks, task);
    }
  };

  return (
    <div style={{ height: "100vh" }} className="bg-dark d-flex flex-column">
      <h1
        className="text-white p-3"
        style={{ fontFamily: "'Stick No Bills', sans-serif" }}
      >
        Task Management App
      </h1>
      <div className="d-flex flex-row flex-grow-1" ref={pageRef}>
        <div
          className="d-flex flex-column"
          style={{ width: "33vw", padding: "10px" }}
        >
          <ToDo
            setTasks={setToDoTasks}
            tasks={toDoTasks}
            handleMove={handleMove}
          />
        </div>
        <div
          className="d-flex flex-column"
          style={{ width: "33vw", padding: "10px" }}
        >
          <InProcess
            setTasks={setInProcessTasks}
            tasks={inProcessTasks}
            handleMove={handleMove}
          />
        </div>
        <div
          className="d-flex flex-column"
          style={{ width: "33vw", padding: "10px" }}
        >
          <Finished setTasks={setFinishedTasks} tasks={finishedTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
