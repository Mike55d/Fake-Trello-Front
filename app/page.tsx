"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaPen, FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const CardComponent = () => {
  return (
    <Col >
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <h6>Task Title</h6>
            </Col>
            <Col style={{display:'flex', justifyContent:"flex-end"}}>
              <Button
                variant="outline-primary"
                size="sm"
                style={{ borderRadius: 20 , marginRight:5}}
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
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default function Home() {
  return (
    <>
      <Container style={{ marginTop: 15 }}>
        <Row>
          
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </Row>
      </Container>
    </>
  );
}
