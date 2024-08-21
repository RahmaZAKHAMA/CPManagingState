import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddTask = ({AddNEWTask}) => {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(taskName);
const HandleAdd=()=>{
   AddNEWTask(taskName); 
   handleClose();
}
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Add New task
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
                placeholder="task name"
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
          <Button variant="primary" onClick={HandleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTask