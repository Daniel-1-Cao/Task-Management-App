import React, { useState, forwardRef, useImperativeHandle } from "react";

const Finished = forwardRef((props, ref) => {
  const [tasks, setTasks] = useState([]);

  useImperativeHandle(ref, () => ({
    handleInsert: (task) => {
      setTasks([...tasks, task]);
    },
  }));

  return (
    <>
      <div className="border border-success border-4 rounded-3 bg-secondary mb-3">
        <h2
          style={{ fontFamily: "'Stick No Bills', sans-serif", margin: "5px" }}
        >
          Finished
        </h2>
      </div>
      <div className="flex-grow-1 border border-success border-4 rounded-3 bg-secondary" />
    </>
  );
});

export default Finished;
