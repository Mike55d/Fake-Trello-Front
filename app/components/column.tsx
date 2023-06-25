"use client";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTrash, FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useMemo } from "react";
import TaskComponent from "./task";
import { Droppable } from "react-beautiful-dnd";

const ColumnComponent = ({ column }: any) => {
  const tasks = useMemo(() => {
    return column.tasks.sort((a: any, b: any) => {
      return a.order - b.order;
    });
  }, [column.tasks]);

  return (
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
          <Droppable droppableId={`c-${column.id}`} type="task">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task: any, index: number) => (
                  <TaskComponent task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ColumnComponent;
