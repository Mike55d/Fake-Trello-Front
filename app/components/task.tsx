"use client";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaPen, FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Draggable } from "react-beautiful-dnd";

const TaskComponent = ({ task, index }: any) => {
  
  return (
    <Draggable draggableId={task.id} index={index} key={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={{ width: "100%", marginTop: 8 }}>
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col>
                    <h6>{task.title}</h6>
                  </Col>
                  <Col style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      style={{ borderRadius: 20, marginRight: 5 }}
                    >
                      <FaPen />
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
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: 12 }}
              >
                {task.subtitle}
              </Card.Subtitle>
              <Card.Text style={{ fontSize: 10 }}>{task.text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskComponent;
