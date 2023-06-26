"use client";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTrash, FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import TaskComponent from "./task";
import { Droppable } from "react-beautiful-dnd";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { createTask } from "../api/tasks";

const ModalTasks = ({
  showModal,
  setShowModal,
  setFormTask,
  handleSubmitFormTask,
  formTask,
}: any) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create new column</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Title"
          onChange={(event) =>
            setFormTask({ ...formTask, title: event.target.value })
          }
          style={{ marginBottom: 10 }}
        />
        <Form.Control
          type="text"
          placeholder="Subtitle"
          onChange={(event) =>
            setFormTask({ ...formTask, subtitle: event.target.value })
          }
          style={{ marginBottom: 10 }}
        />
        <Form.Control
          as="textarea"
          placeholder="Text"
          style={{ height: "100px" }}
          onChange={(event) =>
            setFormTask({ ...formTask, text: event.target.value })
          }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSubmitFormTask()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const ColumnComponent = ({ column, index, getDataColumns }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [formTask, setFormTask] = useState<any>(null);

  const handleSubmitFormTask = async () => {
    await createTask({
      ...formTask,
      columnId: parseInt(column.id.split("-")[1]),
    });
    setShowModal(false);
    setFormTask(null);
    getDataColumns();
  };

  return (
    <>
      <Col md={3}>
        <Card>
          <Card.Header style={{ backgroundColor: "#DDE6ED" }}>
            <Row>
              <Col>
                <h6 style={{ fontWeight: "bolder" }}>{column.title}</h6>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="outline-success"
                  size="sm"
                  style={{ borderRadius: 20, marginRight: 5 }}
                  onClick={() => setShowModal(true)}
                >
                  <FaPlus />
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  style={{ borderRadius: 20 }}
                >
                  <FaTrash />
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body style={{ backgroundColor: "#DDE6ED" }}>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {column.tasks.map((task: any, index: number) => (
                    <TaskComponent task={task} index={index} key={task.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Card.Body>
        </Card>
      </Col>
      <ModalTasks
        showModal={showModal}
        setShowModal={setShowModal}
        setFormTask={setFormTask}
        handleSubmitFormTask={handleSubmitFormTask}
        formTask={formTask}
      />
    </>
  );
};

export default ColumnComponent;
