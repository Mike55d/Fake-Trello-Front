"use client";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaPen, FaTrash } from "react-icons/fa";
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
      <Container style={{ marginTop: 15 }}>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Header>Column Name</Card.Header>
              <Card.Body>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Header>Column Name</Card.Header>
              <Card.Body>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Header>Column Name</Card.Header>
              <Card.Body>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
