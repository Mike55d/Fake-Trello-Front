"use client";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Draggable } from "react-beautiful-dnd";
import { deleteTask } from "../api/tasks";

const TaskComponent = ({ task, index, getDataColumns }: any) => {
  const handleDeleteTask = async () => {
    await deleteTask(parseInt(task.id.split("-")[1]));
    getDataColumns();
  };

  return (
    <Draggable draggableId={task.id} index={index} key={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            style={{
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>
                      <h6>{task.title}</h6>
                    </Col>
                    <Col
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        variant="outline-danger"
                        size="sm"
                        style={{ borderRadius: 20 }}
                        onClick={handleDeleteTask}
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
        </div>
      )}
    </Draggable>
  );
};

export default TaskComponent;
