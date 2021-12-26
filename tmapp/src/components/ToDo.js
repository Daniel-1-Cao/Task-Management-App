import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
import Modal from "react-bootstrap/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import DatePicker from "@mui/lab/DatePicker";

import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Task from "./Task";

const ToDo = (props) => {
  const { tasks, setTasks, handleMove } = props;
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(0);
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleAdd = () => {
    const task = [id, title, description, value.toString().substring(0, 15)];
    setId(id + 1);
    setTasks([...tasks, task]);

    handleModal();
  };

  const handleDelete = (id, xCor) => {
    var copyTasks = tasks;
    tasks.forEach((element, i) => {
      if (element[0] === id) {
        copyTasks.splice(i, 1);
        setTasks(copyTasks);
        handleMove(element, 0, xCor);
      }
    });
  };

  return (
    <>
      <div className="border border-warning border-4 rounded-3 bg-secondary mb-3 d-flex flex-row">
        <h2
          className="flex-grow-1"
          style={{ fontFamily: "'Stick No Bills', sans-serif", margin: "5px" }}
        >
          ToDo
        </h2>
        <button
          className="border border-warning bg-secondary border-2 rounded-3"
          style={{ fontFamily: "'Stick No Bills', sans-serif", margin: "5px" }}
          onClick={handleModal}
        >
          Add Task
        </button>
        <Modal show={showModal} onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-group mb-3 d-flex flex-column">
              <TextField
                label="Task Title"
                className="m-3"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <TextField
                label="Task Description"
                multiline
                className="m-3"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  label="Due Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField className="m-3" {...params} />
                  )}
                />
              </LocalizationProvider>
              <Button onClick={handleAdd}>Add</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="flex-grow-1 border border-warning border-4 rounded-3 bg-secondary">
        {tasks.map((item) => {
          console.log(tasks[0]);
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

export default ToDo;
