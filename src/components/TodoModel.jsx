import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./TodoModel.css";
const TodoModel = ({ todo, taskCompleted, DeleteTask, EditTask }) => {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HandleEdit = () => {
    taskName != "" && taskName.trim()
      ? EditTask(todo.id, taskName) && handleClose()
      : alert("task name error");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "1%",
        backgroundColor: "lightgray",
        height: "50px",
        padding: "5px",
      }}
    >
      <h5 className={todo.completed == false ? "NotCompleted" : "Completed"}>
        {todo.title}
      </h5>
      <Button
        className="button-margin"
        variant="secondary"
        onClick={() => taskCompleted(todo.id)}
      >
        {todo.completed ? "Completed" : "NotCompleted"}
      </Button>
      <Button
        className="button-margin"
        variant="btn btn-outline-danger"
        onClick={() => DeleteTask(todo.id)}
      >
        Delete
      </Button>

      <Button
        className="button-margin"
        variant="outline-primary"
        onClick={handleShow}
      >
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={todo.title}
                required
                autoFocus
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleEdit}>
            Edit Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoModel;
