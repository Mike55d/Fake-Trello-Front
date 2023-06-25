"use client";
import { Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { getData } from "./api/column";
import ColumnComponent from "./components/column";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export default function Home() {
  const [columnTasks, setColumnTasks] = useState<any[]>([]);

  const getDataColumns = async () => {
    const data = await getData();
    setColumnTasks(data);
  };

  useEffect(() => {
    getDataColumns();
  }, []);

  const handleDragTask = (event: DropResult) => {
    const { destination, source, draggableId } = event;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (!columnTasks) return;
    const columnIndex = columnTasks.findIndex(
      (column: any) => `c-${column.id}` == source.droppableId
    );
    const columnDestinyIndex = columnTasks.findIndex(
      (column: any) => `c-${column.id}` == destination.droppableId
    );
    if (columnIndex == -1 && columnDestinyIndex == -1) return;
    const newColumnsTasks = [...columnTasks];
    const taskIndex = newColumnsTasks[columnIndex].tasks.findIndex(
      (task: any) => `t-${task.id}` == draggableId
    );
    const task = newColumnsTasks[columnIndex].tasks.splice(taskIndex, 1);
    newColumnsTasks[columnDestinyIndex].tasks.splice(
      destination.index,
      0,
      task[0]
    );
    console.log(newColumnsTasks);
    setColumnTasks(newColumnsTasks);
    // setDataTasks(newColumns);
  };

  const handleDragEnd = (event: DropResult) => {
    handleDragTask(event);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
          <Row>
            <Col md={11}>
              <Row>
                {columnTasks
                  ? columnTasks.map((column) => (
                      <ColumnComponent column={column} />
                    ))
                  : null}
              </Row>
            </Col>
            <Col md={1}>
              <Button variant="success" size="sm">
                <FaPlus /> Column
              </Button>
            </Col>
          </Row>
        </div>
      </DragDropContext>
    </>
  );
}
