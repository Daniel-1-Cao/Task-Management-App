import React, { useState, useEffect } from "react";
import Task from "./Task";

const InProcess = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { tasks, setTasks, handleMove } = props;

  const [IPTasks, setIPTasks] = useState([]);
  useEffect(() => {
    console.log(props.tasks);
    setIPTasks(props.tasks);
  }, [props.tasks]);

  const handleDelete = (id) => {
    tasks.forEach((element, i) => {
      if (element[0] === id) {
        tasks.splice(i, 1);
        handleMove(element, 1);
      }
    });
  };

  return (
    <>
      <div className="border border-primary border-4 rounded-3 bg-secondary mb-3">
        <h2
          style={{ fontFamily: "'Stick No Bills', sans-serif", margin: "5px" }}
        >
          InProcess
        </h2>
      </div>
      <div
        className="flex-grow-1 border border-primary border-4 rounded-3 bg-secondary"
        key={tasks}
      >
        {IPTasks.map((item) => {
          debugger;
          return (
            <Task
              id={item[0]}
              title={item[1]}
              description={item[2]}
              date={item[3]}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default InProcess;
