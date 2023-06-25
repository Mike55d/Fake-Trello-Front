"use client";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTrash, FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import TaskComponent from "./task";
import { Droppable } from "react-beautiful-dnd";

const ColumnComponent = ({ column, index }: any) => {
console.log(column);
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
          <Droppable droppableId={column.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {column.tasks.map((task: any, index: number) => (
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
