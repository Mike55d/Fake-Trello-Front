"use client";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaPen, FaTrash, FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const CardComponent = () => {
  return (
    <Card style={{ width: "100%", marginTop: 8 }}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <h6>Task Title</h6>
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
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: 12 }}>
          Card Subtitle
        </Card.Subtitle>
        <Card.Text style={{ fontSize: 10 }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default function Home() {
  return (
    <>
      <div style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
        <Row>
          <Col md={11}>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Header style={{ backgroundColor: "#DDE6ED" }}>
                    <Row>
                      <Col>
                        <h6 style={{ fontWeight: "bolder" }}>Column Name</h6>
                      </Col>
                      <Col
                        style={{ display: "flex", justifyContent: "flex-end" }}
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
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={1}>
            <Button variant="success" size="sm">
              <FaPlus /> Column
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
