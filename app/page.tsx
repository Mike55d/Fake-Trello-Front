"use client";
import { Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { createColumn, getData } from "./api/column";
import ColumnComponent from "./components/column";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { changeColumn, sortTask } from "./api/tasks";

const ModalColumns = ({
  showModal,
  setShowModal,
  setFormColumn,
  handleSubmitFormColumn,
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
          onChange={(event) => setFormColumn({ title: event.target.value })}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSubmitFormColumn()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default function Home() {
  const [columnTasks, setColumnTasks] = useState<any[]>([]);
  const [winReady, setwinReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formColumn, setFormColumn] = useState<any>(null);

  const getDataColumns = async () => {
    const data = await getData();
    const newData = data.map((column: any) => ({
      ...column,
      id: `c-${column.id}`,
      tasks: column.tasks
        .sort((a: any, b: any) => {
          return a.order - b.order;
        })
        .map((task: any) => ({
          ...task,
          id: `t-${task.id}`,
        })),
    }));
    setColumnTasks(newData);
  };

  useEffect(() => {
    setTimeout(() => setwinReady(true), 1000);
    getDataColumns();
  }, []);

  const handleDragTask = (event: DropResult) => {
    const { destination, source, draggableId } = event;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (!columnTasks) return;
    const columnIndex = columnTasks.findIndex(
      (column: any) => column.id == source.droppableId
    );
    const columnDestinyIndex = columnTasks.findIndex(
      (column: any) => column.id == destination.droppableId
    );
    const newColumnsTasks = [...columnTasks];
    const taskIndex = newColumnsTasks[columnIndex].tasks.findIndex(
      (task: any) => task.id == draggableId
    );
    const task = newColumnsTasks[columnIndex].tasks.splice(taskIndex, 1);
    if (destination.droppableId == source.droppableId) {
      newColumnsTasks[columnIndex].tasks.splice(destination.index, 0, task[0]);
      sortTask({
        columnId: parseInt(newColumnsTasks[columnIndex].id.split("-")[1]),
        destinationIndex: destination.index,
        sourceIndex: source.index,
        taskId: parseInt(task[0].id.split("-")[1]),
      });
      return;
    } else {
      changeColumn({
        columnId: parseInt(newColumnsTasks[columnIndex].id.split("-")[1]),
        destinationIndex: destination.index,
        sourceIndex: source.index,
        taskId: parseInt(task[0].id.split("-")[1]),
        columnDestiny: parseInt(
          newColumnsTasks[columnDestinyIndex].id.split("-")[1]
        ),
      });
    }
    if (columnIndex == -1 && columnDestinyIndex == -1) return;
    newColumnsTasks[columnDestinyIndex].tasks.splice(
      destination.index,
      0,
      task[0]
    );
    setColumnTasks(newColumnsTasks);
  };

  const handleDragEnd = (event: DropResult) => {
    handleDragTask(event);
  };

  const handleSubmitFormColumn = async () => {
    await createColumn(formColumn);
    setShowModal(false);
    setFormColumn(null);
    getDataColumns();
  };

  return (
    <>
      {winReady ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <div style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
            <Row>
              <Col md={11}>
                <Row>
                  {columnTasks
                    ? columnTasks.map((column) => (
                        <ColumnComponent column={column} key={column.id} getDataColumns={getDataColumns} />
                      ))
                    : null}
                </Row>
              </Col>
              <Col md={1}>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => setShowModal(true)}
                >
                  <FaPlus /> Column
                </Button>
              </Col>
            </Row>
          </div>
        </DragDropContext>
      ) : null}
      <ModalColumns
        showModal={showModal}
        setShowModal={setShowModal}
        setFormColumn={setFormColumn}
        handleSubmitFormColumn={handleSubmitFormColumn}
      />
    </>
  );
}
