"use client";
import { Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { getData } from "./api/column";
import ColumnComponent from "./components/column";
import { DragDropContext } from "react-beautiful-dnd";

export default function Home() {
  const [columnTasks, setColumnTasks] = useState<any[]>([]);

  const getDataColumns = async () => {
    const data = await getData();
    setColumnTasks(data);
  };

  useEffect(() => {
    getDataColumns();
  }, []);

  const handleDragEnd = () => {};

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
